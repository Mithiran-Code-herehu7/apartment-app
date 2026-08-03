
# High-Level Database Architecture

I've simplified the database design into a visual map that groups the tables by their purpose. This focuses only on the most important "Core" tables so you can easily see how data flows from a User to a Booking.

```mermaid
flowchart TD
    %% Define Styles and Colors
    classDef core fill:#e1f5fe,stroke:#0288d1,stroke-width:2px,color:#01579b
    classDef marketplace fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#1b5e20
    classDef transaction fill:#fff3e0,stroke:#f57c00,stroke-width:2px,color:#e65100
    classDef trust fill:#ffebee,stroke:#d32f2f,stroke-width:2px,color:#b71c1c

    %% Define Nodes
    Apartment["Apartment<br>(Your Community)"]:::core
    User["User<br>(Resident)"]:::core
    Profile["User Profile<br>(Bio & Avatar)"]:::core
    
    Category["Category<br>(e.g., Fitness, Tech)"]:::marketplace
    Listing["Listing<br>(A Class or Service)"]:::marketplace
    Pricing["Pricing Plans<br>(Cost & Bundles)"]:::marketplace
    Slot["Availability Slots<br>(When it happens)"]:::marketplace
    
    Booking["Booking<br>(The Reservation)"]:::transaction
    Payment["Payment<br>(Transaction Record)"]:::transaction
    
    Message["Messages<br>(Booking Chat)"]:::trust
    Review["Reviews<br>(Post-session Rating)"]:::trust
    Dispute["Disputes<br>(Admin Moderation)"]:::trust

    %% Core Relationships
    Apartment -->|Houses| User
    User -.->|Has a| Profile
    
    %% Provider Flow
    User -->|Creates (as Provider)| Listing
    Category -->|Groups| Listing
    Listing -->|Offers| Pricing
    Listing -->|Schedules| Slot

    %% Learner Flow
    User -->|Books (as Learner)| Booking
    Slot -->|Reserved via| Booking
    Pricing -->|Paid via| Booking
    
    %% Transaction Lifecycle
    Booking -->|Requires| Payment
    Booking -->|Generates| Message
    Booking -->|Receives| Review
    Booking -->|Can trigger| Dispute
```

## Color Guide
- **🟦 Blue (Core):** The foundation of your app. Everything lives in an `Apartment` and is driven by `Users`.
- **🟩 Green (Marketplace):** The catalog. Providers create `Listings` with specific `Categories`, `Pricing`, and `Availability Slots`.
- **🟧 Orange (Transactions):** The engine. When a learner chooses a slot and price, it generates a `Booking` and a `Payment`.
- **🟥 Red (Trust & Safety):** The community safeguards. Tied directly to a booking, these handle `Messages`, `Reviews`, and conflict `Disputes`.
