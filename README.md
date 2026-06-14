<div align="center">

# SnapSavvy

### AI-Powered Image Transformation Platform

**Restore, enhance, recolor, and reimagine photos with the power of generative AI — in seconds.**

---

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-AI-3448C5?style=flat-square&logo=cloudinary)](https://cloudinary.com)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=flat-square&logo=stripe)](https://stripe.com)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=flat-square&logo=clerk)](https://clerk.com)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)]()

</div>

---

## Overview

SnapSavvy is a full-stack SaaS platform that brings professional-grade AI image editing to everyone. Powered by Cloudinary's generative AI engine, users can restore old photographs, remove or recolor objects, erase backgrounds, and fill missing areas — all from a clean, responsive web interface.

The platform operates on a **credit-based economy** with Stripe-powered purchases, a complete user authentication system via Clerk, and persistent image management backed by MongoDB. It is designed to be scalable, secure, and immediately deployable.

**Who is it for?**
Photographers, designers, content creators, marketers, and anyone who needs fast, high-quality AI image edits without a steep learning curve or expensive software subscription.

---

## Screenshots

> _The views below represent the primary screens of the application._

| Landing Page | Dashboard |
|:---:|:---:|
| ![Landing](.github/screenshots/landing.png) | ![Dashboard](.github/screenshots/dashboard.png) |

| Transformation Studio | Profile & History |
|:---:|:---:|
| ![Transform](.github/screenshots/transform.png) | ![Profile](.github/screenshots/profile.png) |

| Credits & Billing | Mobile View |
|:---:|:---:|
| ![Credits](.github/screenshots/credits.png) | ![Mobile](.github/screenshots/mobile.png) |

---

## Features

### AI Transformations

| Feature | Description |
|---|---|
| **Photo Restore** | Remove noise, artifacts, and imperfections from old or damaged photographs using Cloudinary's AI restoration pipeline |
| **Background Removal** | Instantly isolate subjects from their backgrounds with pixel-accurate AI segmentation |
| **Generative Fill** | Extend image boundaries using AI outpainting — supports landscape, portrait, and square aspect ratios |
| **Object Removal** | Describe an unwanted object via natural-language prompt; the AI cleanly erases it and reconstructs the background |
| **Object Recolor** | Change the color of any named object in the image with a natural-language prompt and a target color |

### Platform & Product

| Feature | Description |
|---|---|
| **Credit System** | Every transformation costs 1 credit; users receive 10 free credits on sign-up |
| **Stripe Checkout** | Purchase credit packs via hosted Stripe checkout with automatic credit delivery on payment confirmation |
| **Image Gallery** | Browse all community transformations or filter to personal history from the profile page |
| **Paginated Collections** | Server-rendered paginated gallery (9 per page) with fast, stateless navigation |
| **Search** | Full-text search across image titles and Cloudinary metadata |
| **Download** | One-click download of the transformed image at full resolution |
| **Update & Delete** | Edit transformation parameters or remove images with confirmation dialogs |

### Authentication & Security

| Feature | Description |
|---|---|
| **Clerk Auth** | Sign-up and sign-in with email or OAuth providers; middleware-enforced route protection |
| **Webhook Sync** | Clerk webhooks sync user lifecycle events (create / update / delete) into MongoDB in real time |
| **Stripe Webhooks** | Payment confirmation is handled server-side via signed Stripe webhooks — credits are never added before payment clears |
| **Ownership Checks** | Server actions verify user ownership before allowing image updates or deletion |

### Developer Experience

| Feature | Description |
|---|---|
| **App Router** | Built on Next.js 14 App Router with nested layouts and route groups |
| **Server Actions** | All data mutations use Next.js Server Actions — no separate REST API layer needed |
| **End-to-End Types** | Comprehensive TypeScript coverage with shared `types/index.d.ts` across the entire domain |
| **Form Validation** | React Hook Form + Zod schema validation for all user-facing forms |
| **Dark Mode** | Full dark/light theme support with `next-themes`, zero flash on load |
| **Responsive Design** | Mobile-first TailwindCSS layout with a dedicated mobile navigation drawer |

---

## Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Full-stack React framework with SSR, Server Actions, and file-based routing |
| **Language** | TypeScript 5 | Static typing across the entire codebase |
| **Styling** | TailwindCSS 3 + shadcn/ui | Utility-first CSS with accessible Radix UI primitives |
| **Authentication** | Clerk v5 | Hosted auth with webhooks, OAuth, and Next.js middleware SDK |
| **Database** | MongoDB + Mongoose | Flexible document store for users, images, and transactions |
| **AI / Media** | Cloudinary + next-cloudinary | AI transformation engine, media storage, and global CDN delivery |
| **Payments** | Stripe v15 | Hosted checkout, webhook handling, and payment intent management |
| **Forms** | React Hook Form + Zod | Performant form state with schema-based validation |
| **Icons** | Lucide React + Heroicons | Consistent icon sets across UI elements |
| **Theme** | next-themes | System-aware dark/light mode with no SSR hydration flicker |
| **Webhook Verification** | Svix | Cryptographic verification of Clerk webhook signatures |
| **Deployment** | Vercel (recommended) | Zero-config Next.js deployment with edge network |

---

## Project Structure

```
SnapSavvy/
│
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── (landing)/                    # Public marketing site
│   │   │   ├── page.tsx                  # Hero landing page
│   │   │   └── layout.tsx                # Navbar + Footer wrapper
│   │   │
│   │   ├── (auth)/                       # Clerk-hosted auth UI
│   │   │   ├── sign-in/[[...sign-in]]/   # Sign-in catchall route
│   │   │   ├── sign-up/[[...sign-up]]/   # Sign-up catchall route
│   │   │   └── layout.tsx                # Centered auth layout
│   │   │
│   │   ├── (root)/                       # Protected application routes
│   │   │   ├── layout.tsx                # Sidebar + mobile nav shell
│   │   │   ├── main/page.tsx             # Dashboard — community gallery
│   │   │   ├── profile/page.tsx          # User's own transformations
│   │   │   ├── credits/page.tsx          # Credit purchase page
│   │   │   ├── loading.tsx               # Root-level loading skeleton
│   │   │   └── transformations/
│   │   │       ├── add/[type]/page.tsx   # Create transformation by type
│   │   │       ├── [id]/page.tsx         # View transformation detail
│   │   │       └── [id]/update/page.tsx  # Edit existing transformation
│   │   │
│   │   ├── api/webhooks/
│   │   │   ├── clerk/route.ts            # Clerk user lifecycle events
│   │   │   └── stripe/route.ts           # Stripe payment confirmation
│   │   │
│   │   ├── layout.tsx                    # Root layout — ClerkProvider, ThemeProvider
│   │   ├── error.tsx                     # Application error boundary
│   │   └── not-found.tsx                 # 404 page
│   │
│   ├── components/
│   │   ├── Landing.tsx                   # Full landing page composition
│   │   ├── Navbar.tsx                    # Top navigation bar (public pages)
│   │   ├── Hero.tsx                      # Hero section with CTA
│   │   ├── Benefits.tsx                  # Feature highlights section
│   │   ├── Testimonials.tsx              # Social proof section
│   │   ├── Footer.tsx                    # Site footer
│   │   ├── ThemeToggler/                 # Dark/light mode toggle
│   │   └── shared/                       # App-wide reusable components
│   │       ├── TransformationForm.tsx    # Create / update transformation form
│   │       ├── MediaUploader.tsx         # Cloudinary upload widget wrapper
│   │       ├── TransformedImage.tsx      # Before/after transformation preview
│   │       ├── Collection.tsx            # Paginated image grid
│   │       ├── Search.tsx                # Image search input
│   │       ├── SideBar.tsx               # App sidebar navigation
│   │       ├── MobileNav.tsx             # Mobile navigation drawer
│   │       ├── Header.tsx                # Page-level header component
│   │       ├── Checkout.tsx              # Stripe checkout button
│   │       ├── InsufficientCreditsModal.tsx  # Low-credit warning dialog
│   │       ├── CustomField.tsx           # Reusable form field wrapper
│   │       └── DeleteConfirmation.tsx    # Deletion confirmation dialog
│   │
│   ├── lib/
│   │   ├── database/
│   │   │   ├── mongoose.ts               # Singleton MongoDB connection with pooling
│   │   │   └── models/
│   │   │       ├── image.model.ts        # Image Mongoose schema
│   │   │       ├── user.model.ts         # User Mongoose schema
│   │   │       └── transaction.model.ts  # Transaction Mongoose schema
│   │   ├── actions/
│   │   │   ├── image.actions.ts          # Image CRUD server actions
│   │   │   ├── user.actions.ts           # User management + credit actions
│   │   │   └── transaction.actions.ts    # Stripe checkout + transaction recording
│   │   └── utils.ts                      # Shared utilities (cn, download, deepMerge)
│   │
│   └── middleware.ts                     # Clerk auth middleware (route protection)
│
├── constants/
│   └── index.ts                          # Nav links, transformation configs, credit plans
│
├── types/
│   └── index.d.ts                        # Global TypeScript interfaces and types
│
├── public/
│   └── assets/
│       ├── icons/                        # SVG icon assets
│       └── images/                       # Brand and UI images
│
├── components/ui/                        # shadcn/ui component library
├── .env.example                          # Environment variable template
├── next.config.mjs                       # Next.js configuration
├── tailwind.config.ts                    # Tailwind + custom design tokens
└── tsconfig.json                         # TypeScript compiler options
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **pnpm**
- A **MongoDB** database (MongoDB Atlas free tier works)
- A **Cloudinary** account (free tier works)
- A **Clerk** account (free tier works)
- A **Stripe** account (test mode for development)

### 1. Clone the Repository

```bash
git clone https://github.com/Engraya/snapsavvy.git
cd snapsavvy
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Fill in all values — see the [Environment Variables](#environment-variables) section for details.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Configure Webhooks

**Clerk Webhook**
In the Clerk Dashboard → Webhooks, add an endpoint:
```
https://your-domain.com/api/webhooks/clerk
```
Subscribe to: `user.created`, `user.updated`, `user.deleted`

**Stripe Webhook**
In the Stripe Dashboard → Developers → Webhooks, add an endpoint:
```
https://your-domain.com/api/webhooks/stripe
```
Subscribe to: `checkout.session.completed`

For local development, forward events with the Stripe CLI:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### 6. Production Build

```bash
npm run build
npm run start
```

---

## Environment Variables

Create a `.env.local` file at the project root:

```env
# ── Clerk Authentication ──────────────────────────────────────────────────────
# From: https://dashboard.clerk.com → Your App → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# From: Clerk Dashboard → Webhooks → Signing Secret
CLERK_WEBHOOK_SECRET=whsec_...

# Redirect behavior after authentication
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/main
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/main

# ── MongoDB ───────────────────────────────────────────────────────────────────
# MongoDB Atlas connection string or local URI
MONGODB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/snapsavvy

# ── Cloudinary ────────────────────────────────────────────────────────────────
# From: https://cloudinary.com → Dashboard
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=000000000000000
CLOUDINARY_API_SECRET=your_api_secret

# ── Stripe ────────────────────────────────────────────────────────────────────
# From: https://dashboard.stripe.com → Developers → API Keys
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# From: Stripe Dashboard → Developers → Webhooks → Signing Secret
STRIPE_WEBHOOK_SECRET=whsec_...

# ── Application ───────────────────────────────────────────────────────────────
# Public base URL of your deployment (no trailing slash)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

> **Never commit `.env.local` to version control.** `.env.example` provides a safe template with no real credentials.

---

## AI Transformation Engine

SnapSavvy delegates all image intelligence to **Cloudinary's generative AI pipeline**, accessed through the `next-cloudinary` SDK.

### How a Transformation Works

```
User Uploads Image
       │
       ▼
Cloudinary Upload Widget (MediaUploader)
Stores asset → returns publicId + dimensions
       │
       ▼
User Selects Transformation Type + Parameters
(aspect ratio / prompt / target color)
       │
       ▼
TransformedImage renders <CldImage> with effect applied
Cloudinary processes on-the-fly → CDN-cached result
       │
       ▼
User Saves → Server Action
  1. Deducts 1 credit from user balance
  2. Persists metadata to MongoDB
  3. Returns saved image document
       │
       ▼
User downloads full-resolution result
```

### Transformation Type → Cloudinary Effect Mapping

| UI Label | Cloudinary AI Effect |
|---|---|
| Restore | `restore` |
| Remove Background | `background_removal` |
| Generative Fill | `generative_fill` + aspect ratio |
| Object Remove | `gen_remove` + natural-language prompt |
| Object Recolor | `gen_recolor` + prompt + target color |

---

## API Endpoints

All data mutations are Next.js Server Actions. The only traditional HTTP handlers are the two signed webhook receivers:

### `POST /api/webhooks/clerk`

Verified via Svix signature. Handles Clerk user lifecycle.

| Event | Action |
|---|---|
| `user.created` | Creates a User document in MongoDB with 10 free credits |
| `user.updated` | Syncs name, email, and photo to the User document |
| `user.deleted` | Removes the User document from MongoDB |

### `POST /api/webhooks/stripe`

Verified via Stripe signature. Handles payment confirmation.

| Event | Action |
|---|---|
| `checkout.session.completed` | Creates a Transaction document and credits the buyer's balance |

---

## Database Schema

### User

```typescript
{
  clerkId:       string   // Clerk user ID — unique, indexed
  email:         string   // User email — unique
  username:      string   // Display username — unique
  photo:         string   // Profile photo URL
  firstName:     string
  lastName:      string
  planId:        number   // Plan tier (default: 1)
  creditBalance: number   // Available credits (default: 10)
}
```

### Image

```typescript
{
  title:              string   // User-given name for the transformation
  transformationType: string   // restore | removeBackground | fill | remove | recolor
  publicId:           string   // Cloudinary asset public ID
  secureURL:          string   // Cloudinary CDN URL of the original
  width:              number
  height:             number
  config:             object   // Cloudinary transformation parameters
  transformationUrl:  string   // Cloudinary CDN URL of the result
  aspectRatio:        string   // Optional — generative fill
  color:              string   // Optional — object recolor
  prompt:             string   // Optional — object remove / recolor
  author:             ObjectId // Reference → User
  createdAt:          Date
  updatedAt:          Date
}
```

### Transaction

```typescript
{
  stripeId:  string   // Stripe checkout session ID — unique
  amount:    number   // Amount charged (USD)
  credits:   number   // Credits purchased
  plan:      string   // Plan name
  buyer:     ObjectId // Reference → User
  createdAt: Date
}
```

---

## Credit Plans

| Plan | Credits | Price | Per Credit |
|---|---|---|---|
| Free (on sign-up) | 10 | $0 | — |
| Pro Package | 120 | $40 | ~$0.33 |
| Premium Package | 2,000 | $199 | ~$0.10 |

Every AI transformation costs **1 credit**. When a user's balance reaches zero, `InsufficientCreditsModal` intercepts the action and prompts them to purchase more.

---

## Performance Optimizations

- **Next.js Image Component** — All images use `next/image` for automatic format conversion (WebP/AVIF), lazy loading, and responsive `srcset` generation.
- **Server Actions** — Mutations run on the server, eliminating unnecessary client-to-API round trips and keeping response payloads minimal.
- **MongoDB Connection Pooling** — `mongoose.ts` maintains a singleton connection cached across requests in both development and production, preventing connection exhaustion on serverless deployments.
- **Server-Side Pagination** — Collections are paginated at the database query level, keeping initial page loads fast regardless of total image count.
- **Cloudinary CDN Delivery** — All transformed images are served from Cloudinary's global CDN; the application server never proxies image data.
- **On-Demand Transformations** — Cloudinary processes transformations lazily on first request and caches results automatically — the AI cost is never paid twice for identical parameters.
- **Route Group Layouts** — Shared `layout.tsx` files inside route groups prevent unnecessary re-renders on navigation between pages that share the same chrome.

---

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Add all environment variables in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js and configures the build.

```bash
# Or deploy directly via CLI
npx vercel --prod
```

### Any Node.js Host

```bash
npm run build   # Outputs optimized build to .next/
npm run start   # Starts production server on port 3000
```

### Pre-Deploy Checklist

- [ ] All environment variables added to the hosting platform
- [ ] Clerk webhook endpoint registered and pointing to the production URL
- [ ] Stripe webhook endpoint registered and pointing to the production URL
- [ ] MongoDB Atlas IP allowlist updated (or set to `0.0.0.0/0` for serverless egress)
- [ ] `NEXT_PUBLIC_SERVER_URL` set to the live domain

---

## Developer Notes

### Architecture Decisions

**Server Actions over REST** — All data mutations (CRUD for images, credit deductions, transaction recording) are implemented as Next.js Server Actions rather than a separate API layer. This keeps the codebase lean and removes client-side fetch boilerplate while still running securely on the server.

**Route Groups for Layout Isolation** — Three route groups (`(landing)`, `(auth)`, `(root)`) each carry their own `layout.tsx`. This allows the marketing site, auth pages, and the app shell to have completely different chrome without any cross-contamination.

**Cloudinary as the AI Layer** — Rather than integrating a raw AI model API, SnapSavvy treats Cloudinary as a managed AI service. This offloads model hosting, scaling, and versioning entirely, while providing a battle-tested CDN for result delivery.

**Webhook-Driven User Sync** — User documents are created in response to Clerk's `user.created` webhook, not at sign-in time. This guarantees the MongoDB record exists before any subsequent request reaches the app, even on first login.

**Credit Atomicity** — Credit deduction and image persistence happen inside the same Server Action. If the database write fails, the credit is not deducted — preventing a state where a user is charged but their image is not saved.

---

## Future Improvements

- **Batch transformations** — Apply the same effect to multiple images in a single job
- **Side-by-side comparison** — Full before/after diff view per transformation
- **Social sharing** — Shareable public links for individual transformation results
- **Admin dashboard** — Usage analytics, revenue metrics, and user management
- **Webhook retry queue** — Persist and replay failed webhook events automatically
- **Rate limiting** — Per-user request throttling to prevent credit abuse
- **Subscription plans** — Monthly credit refresh on recurring Stripe subscriptions
- **AI-generated tags** — Auto-tagging images for improved search and discoverability

---

## Contributing

Contributions are welcome. Please follow these steps:

1. **Fork** the repository and clone your fork locally.
2. **Create a branch** for your change:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make your changes.** Keep commits focused and atomic.
4. **Lint and type-check** before pushing:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```
5. **Open a Pull Request** against `master` with a clear title and description of what changed and why.

Please open an issue first for non-trivial feature additions so we can discuss the approach before implementation.

---

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Built by [Ahmad Engraya](https://github.com/Engraya) &nbsp;·&nbsp; Powered by [Cloudinary](https://cloudinary.com), [Clerk](https://clerk.com) & [Stripe](https://stripe.com)

</div>
