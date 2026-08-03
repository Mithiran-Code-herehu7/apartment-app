"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const main_1 = require("../src/main");
const expressApp = (0, express_1.default)();
let cachedApp;
async function bootstrap() {
    if (!cachedApp) {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressApp));
        app.setGlobalPrefix('api/v1');
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            transform: true,
            forbidNonWhitelisted: true,
        }));
        const httpAdapterHost = app.get(core_1.HttpAdapterHost);
        app.useGlobalFilters(new main_1.AllExceptionsFilter(httpAdapterHost));
        const config = new swagger_1.DocumentBuilder()
            .setTitle('ApartmentSkills API')
            .setDescription('The ApartmentSkills API description')
            .setVersion('1.0')
            .addBearerAuth()
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api/docs', app, document);
        app.use((0, helmet_1.default)());
        app.use((0, cookie_parser_1.default)());
        app.enableCors({
            origin: process.env.FRONTEND_URL || true,
            credentials: true,
        });
        await app.init();
        cachedApp = app;
    }
    return cachedApp;
}
async function handler(req, res) {
    await bootstrap();
    expressApp(req, res);
}
//# sourceMappingURL=index.js.map