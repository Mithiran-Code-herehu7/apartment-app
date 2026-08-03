"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const apartments_service_1 = require("./apartments.service");
const verify_invite_dto_1 = require("./dto/verify-invite.dto");
const public_decorator_1 = require("../../common/decorators/public.decorator");
let ApartmentsController = class ApartmentsController {
    apartmentsService;
    constructor(apartmentsService) {
        this.apartmentsService = apartmentsService;
    }
    findAll() {
        return this.apartmentsService.findAll();
    }
    findOne(id) {
        return this.apartmentsService.findOne(id);
    }
    verifyInvite(id, verifyInviteDto) {
        return this.apartmentsService.verifyInvite(id, verifyInviteDto.token);
    }
};
exports.ApartmentsController = ApartmentsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all active apartments' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of apartments' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific apartment by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Apartment UUID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Apartment details' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Apartment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "findOne", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(':id/verify-invite'),
    (0, swagger_1.ApiOperation)({ summary: 'Verify an invite token for an apartment' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Apartment UUID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Token is valid' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Token invalid or expired' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, verify_invite_dto_1.VerifyInviteDto]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "verifyInvite", null);
exports.ApartmentsController = ApartmentsController = __decorate([
    (0, swagger_1.ApiTags)('apartments'),
    (0, common_1.Controller)('apartments'),
    __metadata("design:paramtypes", [apartments_service_1.ApartmentsService])
], ApartmentsController);
//# sourceMappingURL=apartments.controller.js.map