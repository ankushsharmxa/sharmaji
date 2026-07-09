# SharmaJi Store - E-commerce Web Application Foundation

A premium, fast, mobile-first e-commerce web application foundation built using Next.js 15 (App Router), TypeScript, and Tailwind CSS. The design language features a custom premium blue, amber, and orange theme (inspired by modern shopping platforms but original in branding and asset design).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React Icons
- **Forms**: React Hook Form
- **Validation**: Zod
- **Backend (Configured for future implementation)**: Firebase Auth, Firestore Database, Storage

## Folder Structure

```text
app/                 # Next.js App Router routes
  (shop)/            # Main shop pages (Home, Shop, Category, Product Detail)
  admin/             # Admin Dashboard controller
  cart/              # Cart layout page
  checkout/          # Checkout billing/shipping forms
  login/             # Sign-in form page
  signup/            # Account registration page
  profile/           # Customer account settings
  orders/            # Orders list page
components/          # Reusable React components
  layout/            # Global Container, Navbar, and Footer
  ui/                # Base design items (Button, Card, Input, Badge, etc.)
  home/              # Home-specific panels (Hero, Categories, Trust, Brands)
  products/          # Product card layouts and skeletons
  cart/              # Cart item row controls
constants/           # Theme styling and routing config constants
data/                # Mock products database, categories, and banners
lib/                 # Firebase config & client services initializations
types/               # Centralized domain TypeScript definitions
utils/               # Localized price/date formatting helpers
public/              # Global SVG logos, manifest.json, and PWA assets
```

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd sharmaji-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file at the root using the template:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your Firebase API keys and config properties.

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   ```

## Development Commands

- `npm run dev`: Starts the Next.js local dev environment.
- `npm run build`: Bundles optimized assets for production deployments.
- `npm run start`: Runs the built production server locally.
- `npm run lint`: Verifies ESLint rule compliance.

## Future Roadmap

1. **Phase 3**: Authentication (Integrating Firebase Auth for signin/signup).
2. **Phase 4**: Database integrations (Cloud Firestore CRUD queries for inventory counts and profile syncs).
3. **Phase 5**: Payments checkout integrations (Stripe / Razorpay gateways integration).
4. **Phase 6**: PWA offline caching service workers integration.
