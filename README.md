# Help Station

Help Station is a Next.js-based web application that connects patients with the nearest and available ambulances at affordable prices and provides health facility navigation support.

## Table of Contents

- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Directory Guide](#directory-guide)
- [Static Data & Configuration](#static-data--configuration)
- [Component Library](#component-library)
- [State Management](#state-management)
- [Adding New Features](#adding-new-features)
- [Deployment](#deployment)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linter
npm lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Architecture

### High-Level Flow

```
User Request
    ↓
Next.js Router (app/ directory)
    ↓
Layout Wrapper (app/layout.tsx + ModalProvider)
    ↓
Domain-Specific Pages (domain/*)
    ↓
Reusable Components (components/*)
    ↓
Static Data (constants/*)
    ↓
Utilities & Context State (utils/, context/)
```

### Technology Stack

- **Framework:** Next.js 16.1.6
- **Runtime:** React 19.2.4
- **Styling:** Tailwind CSS 3.4.14 + PostCSS
- **UI Components:** React Icons, Swiper (carousel)
- **Form Validation:** Yup
- **Email:** Nodemailer
- **Utilities:** DOMPurify, JSDOM
- **Language:** TypeScript 5

## Project Structure

### Core Directories

```
help-station/
├── app/                          # Next.js App Router (routing & pages)
│   ├── layout.tsx               # Root layout wrapper
│   ├── page.tsx                 # Homepage
│   ├── api/                     # API routes
│   ├── about-us/               # About page
│   ├── services/               # Services page
│   ├── subscriptions/          # Subscriptions page
│   ├── blog/                   # Blog section
│   ├── contact-us/             # Contact form page
│   ├── faq/                    # FAQ page
│   ├── herat/                  # Herat-specific content
│   ├── become-a-partner/       # Partner enrollment
│   └── policy/                 # Privacy/terms policies
│
├── domain/                       # Page-level feature modules
│   ├── home/                   # Homepage components & logic
│   ├── about-us/              # About page components
│   ├── our-services/          # Services feature
│   ├── subscriptions/         # Subscription feature
│   ├── contact-us/            # Contact form
│   ├── faq/                   # FAQ feature
│   ├── herat/                 # Herat-specific feature
│   ├── our-partner/           # Partner program
│   ├── policy/                # Policy pages
│   ├── resources/             # Resources/gallery
│   ├── result-page/           # Result/search results
│   └── form/                  # Shared form logic
│
├── components/                   # Reusable UI components
│   ├── header/                # Header/navigation
│   ├── layout/                # Layout components (Footer, etc)
│   ├── button/                # Button variants
│   ├── input/                 # Form inputs
│   ├── form/                  # Form components
│   ├── modal/                 # Modal dialogs
│   ├── dropdown/              # Dropdown menus
│   ├── avatar/                # Avatar display
│   ├── image/                 # Image components
│   ├── slider/                # Slider/carousel
│   ├── swiper/                # Swiper carousel
│   ├── pagination/            # Pagination
│   ├── progressBar/           # Progress indicators
│   ├── resourceCard/          # Card components
│   ├── countrySelector/       # Country selector
│   ├── listItem/              # List items
│   ├── map/                   # Map component
│   └── formTemplate/          # Form templates
│
├── constants/                    # Static data & configuration
│   ├── homepageItems.ts       # Homepage content
│   ├── menuItems.ts           # Navigation menu
│   ├── our-service.ts         # Services catalog
│   ├── about.ts               # About page content
│   ├── faq.ts                 # FAQ entries
│   ├── subscriptions.ts       # Subscription plans
│   ├── herat.ts               # Herat region data
│   ├── countries.ts           # Country list
│   ├── policy.ts              # Policy content
│   └── types.ts               # Shared type definitions
│
├── context/                      # React Context (State Management)
│   ├── ModalContext.tsx        # Modal state & handlers
│   ├── BlogContext.tsx         # Blog-related state
│   ├── SubscriptionContext.tsx # Subscription state
│   └── HeratContext.tsx        # Herat-specific state
│
├── utils/                        # Utility functions
│   ├── string.ts              # String manipulation
│   ├── width.ts               # Width/responsive utilities
│   ├── questiondata.ts        # FAQ data processing
│   └── ...                    # Other utilities
│
├── types/                        # TypeScript definitions
│   └── global.d.ts            # Global type definitions
│
├── lib/                          # Library functions & helpers
├── public/                       # Static assets
│   ├── images/                # Image assets
│   ├── icons/                 # Icon SVGs
│   └── fonts/                 # Custom fonts
│
└── component/                    # Legacy component folder (deprecated)
    ├── button/                # Legacy button
    └── swiper/                # Legacy swiper
```

## Key Features

- **Ambulance Booking:** Connect with nearest available ambulances
- **Health Facility Navigation:** Find and navigate to health facilities
- **Subscriptions:** Multiple subscription plans
- **Blog:** Health-related articles and resources
- **Partner Program:** Become a partner/ambulance provider
- **FAQs & Support:** Customer support resources
- **Region Support:** Herat-specific content and services
- **Multi-Country Support:** Country selector for localization

## Directory Guide

### When to Add/Modify Content

#### Adding a New Page
1. Create route in `app/your-page/`
2. Create corresponding domain folder in `domain/your-page/`
3. Import domain component in `app/your-page/page.tsx`
4. Build using reusable components from `components/`

**Example:**
```typescript
// app/your-page/page.tsx
"use client";
import YourPageDomain from "@/domain/your-page";

export default function YourPage() {
  return <YourPageDomain />;
}
```

#### Adding Static Content
1. **Homepage items** → `constants/homepageItems.ts`
2. **Menu/navigation** → `constants/menuItems.ts`
3. **Services** → `constants/our-service.ts`
4. **FAQ entries** → `constants/faq.ts`
5. **Region-specific data** → `constants/herat.ts`
6. **Subscription plans** → `constants/subscriptions.ts`
7. **Countries** → `constants/countries.ts`

**Example:**
```typescript
// constants/homepageItems.ts
export const HOMEPAGE_ITEMS = [
  {
    id: 1,
    title: "Your title",
    description: "Your description",
    // ... other fields
  },
];
```

#### Adding a New Component
1. Create folder in `components/your-component/`
2. Create `index.tsx` and optional `style.css`
3. Export from index for clean imports
4. Use throughout the app with: `import YourComponent from "@/components/your-component"`

**Example:**
```typescript
// components/your-component/index.tsx
export default function YourComponent({ prop1, prop2 }) {
  return <div>Your component</div>;
}

// Usage in any domain
import YourComponent from "@/components/your-component";
```

#### Adding State/Context
1. Create context in `context/YourContext.tsx`
2. Wrap root layout if global, or specific page layout
3. Use hooks to access state in components

**Example:**
```typescript
// context/YourContext.tsx
import { createContext, useState } from "react";

export const YourContext = createContext();

export function YourProvider({ children }) {
  const [state, setState] = useState();
  return (
    <YourContext.Provider value={{ state, setState }}>
      {children}
    </YourContext.Provider>
  );
}
```

#### Updating Static Data

**Homepage Content:**
- File: `constants/homepageItems.ts`
- Used in: `domain/home/`
- Structure: Array of objects with title, description, images, etc.

**Gallery/Resources:**
- File: `domain/resources/` or `constants/`
- Display: ResourceCard component
- Location: Likely "Our Resources" section

**Services Catalog:**
- File: `constants/our-service.ts`
- Display: Used in `domain/our-services/`

**FAQ Data:**
- File: `constants/faq.ts`
- Display: FAQ page with FAQ component structure

**Menu/Navigation:**
- File: `constants/menuItems.ts`
- Display: Header component

## Component Library

### Core Components Available

| Component | Location | Usage |
|-----------|----------|-------|
| Button | `components/button/` | CTAs, actions |
| Input | `components/input/` | Form fields |
| Form | `components/form/` | Form wrappers |
| Modal | `components/modal/` | Dialogs & modals |
| Dropdown | `components/dropdown/` | Dropdowns & menus |
| Header | `components/header/` | Navigation |
| Layout | `components/layout/` | Page wrappers |
| Slider/Swiper | `components/slider/` or `components/swiper/` | Carousels |
| ResourceCard | `components/resourceCard/` | Content cards |
| Pagination | `components/pagination/` | Page navigation |
| CountrySelector | `components/countrySelector/` | Country selection |
| Map | `components/map/` | Map display |

### Import Pattern

```typescript
import Button from "@/components/button";
import Input from "@/components/input";
import Modal from "@/components/modal";
```

## Static Data & Configuration

### Content Files Location

| Content Type | File | Edit Location |
|---|---|---|
| Homepage sections | `constants/homepageItems.ts` | Edit array items |
| Services | `constants/our-service.ts` | Edit service objects |
| FAQs | `constants/faq.ts` | Edit question/answer pairs |
| Subscriptions | `constants/subscriptions.ts` | Edit plan details |
| Navigation Menu | `constants/menuItems.ts` | Edit menu items |
| About Content | `constants/about.ts` | Edit about page text |
| Policy Content | `constants/policy.ts` | Edit policy text |
| Herat Data | `constants/herat.ts` | Edit region-specific data |
| Countries | `constants/countries.ts` | Edit country list |
| Image Gallery | `constants/homepageItems.ts` or domain files | Update image paths |

### Updating Homepage Gallery

The gallery is typically in:
1. `constants/homepageItems.ts` - Gallery data
2. `domain/home/` - Gallery display components
3. `public/images/` - Actual image files

To add new gallery items:
1. Add image to `public/images/`
2. Update gallery array in `constants/homepageItems.ts`
3. Rebuild and test

## State Management

### Context Providers

The app uses React Context for state management:

- **ModalContext** - Modal open/close state, content
- **BlogContext** - Blog articles, filtering
- **SubscriptionContext** - Selected subscription, user tier
- **HeratContext** - Herat region-specific state

Access context in any component:
```typescript
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

export function MyComponent() {
  const { isOpen, openModal } = useContext(ModalContext);
  return <button onClick={openModal}>Open</button>;
}
```

## Adding New Features

### Step-by-Step: Add a New Page

1. **Create app route:**
   ```bash
   mkdir app/your-feature
   touch app/your-feature/page.tsx
   ```

2. **Create domain folder:**
   ```bash
   mkdir domain/your-feature
   touch domain/your-feature/index.tsx
   ```

3. **Create page route file:**
   ```typescript
   // app/your-feature/page.tsx
   "use client";
   import YourFeatureDomain from "@/domain/your-feature";

   export default function YourFeaturePage() {
     return <YourFeatureDomain />;
   }
   ```

4. **Create domain component:**
   ```typescript
   // domain/your-feature/index.tsx
   import Header from "@/components/header";
   import Footer from "@/components/layout/Footer";

   export default function YourFeatureDomain() {
     return (
       <div>
         <Header />
         <main>Your content here</main>
         <Footer />
       </div>
     );
   }
   ```

5. **Add to navigation:**
   - Update `constants/menuItems.ts` with new route
   - Update `components/header/` to include new link

### Step-by-Step: Add Static Content

1. **Create or update constant file:**
   ```typescript
   // constants/your-content.ts
   export const YOUR_CONTENT = [
     {
       id: 1,
       title: "Item 1",
       description: "Description",
     },
   ];
   ```

2. **Import in domain:**
   ```typescript
   import { YOUR_CONTENT } from "@/constants/your-content";

   export default function YourDomain() {
     return (
       <div>
         {YOUR_CONTENT.map(item => (
           <div key={item.id}>{item.title}</div>
         ))}
       </div>
     );
   }
   ```

## Deployment

### Build

```bash
npm run build
```

### Vercel (Recommended)

The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

This is a standard Next.js app and can be deployed to:
- AWS
- Azure
- Firebase Hosting
- Docker containers
- Any Node.js hosting

See [Next.js Deployment Docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Contributing

When making changes:

1. **For content updates:** Edit the relevant file in `constants/`
2. **For component changes:** Update files in `components/`
3. **For page changes:** Update both `app/` route and `domain/` logic
4. **For new features:** Follow the "Adding New Features" section above
5. **For state:** Use existing contexts or add new ones to `context/`

## Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Component-based architecture
- Context for state management
- Consistent file structure by feature

## Support & Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org/docs)

## License

This project is private. All rights reserved.
