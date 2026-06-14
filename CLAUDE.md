# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

**SnapSavvy** is a Next.js 14 App Router application for AI-powered image transformations (restore, background removal, generative fill, object removal, object recoloring) powered by Cloudinary's AI.

### Route Groups

- `src/app/(landing)/` — Public marketing pages (hero, benefits, testimonials)
- `src/app/(auth)/` — Clerk sign-in/sign-up pages
- `src/app/(root)/` — Protected app with shared sidebar layout
  - `main/` — Image gallery dashboard
  - `transformations/add/[type]/` — Create transformation (type = restore | fill | remove | recolor | removeBackground)
  - `transformations/[id]/` — View image details
  - `transformations/[id]/update/` — Edit existing transformation
  - `credits/` — Credit purchase / pricing page
  - `profile/` — User images
- `src/app/api/webhooks/` — Clerk and Stripe webhook endpoints

Middleware (`src/middleware.ts`) protects all routes except `/`, `/sign-in(*)`, `/sign-up(*)`, and webhook endpoints. Users are redirected to `/main` after sign-in.

### Data Layer

**MongoDB + Mongoose** with three models in `src/lib/database/models/`:

- `user.model.ts` — Clerk user sync (clerkId, email, planId 1-3, creditBalance default 10)
- `image.model.ts` — Image records with Cloudinary publicId/secureURL, transformation config, and author ref
- `transaction.model.ts` — Stripe payment records

Database connection is cached in `src/lib/database/mongoose.ts` to avoid repeated connections in serverless.

**Server Actions** in `src/lib/actions/` (`"use server"`) handle all DB mutations and call `revalidatePath` for ISR cache invalidation.

### Image Processing

Cloudinary handles both storage and AI transformations. The `TransformationForm` component collects user inputs (prompt, color, aspect ratio), `MediaUploader` handles upload via `next-cloudinary`, and `TransformedImage` applies and displays the Cloudinary transformation URL. Transformation parameters are stored as JSON in the `config` field on the image model.

### Credit System

Users start with a credit balance (default 10, 20 on sign-up for free plan). Each transformation costs 1 credit (`creditFee` in constants). Credit packs are sold via Stripe: Free (20), Pro ($40/120 credits), Premium ($199/2000 credits). The Stripe webhook in `src/app/api/webhooks/stripe/` updates credit balance on successful payment.

### UI Patterns

- **Shadcn/ui** patterns: Radix UI primitives + Tailwind CSS via CVA (`class-variance-authority`) + `cn()` utility (clsx + tailwind-merge) from `src/lib/utils.ts`
- **Forms**: React Hook Form + Zod validation + custom `CustomField` wrapper
- **Theming**: `next-themes` with CSS variables; custom Tailwind tokens `snap-surface`, `snap-sidebar`, `snap-border` for dark mode
- **Type aliases**: `@/*` → project root, `@src/*` → `./src`

### Key Constants

`constants/index.ts` defines:
- `navLinks` — sidebar navigation with route, label, and icon
- `transformationTypes` — 5 AI transformation configs (title, type, prompt placeholder)
- `aspectRatioOptions` — 1:1, 3:4, 9:16 presets with pixel dimensions
- `creditFee` — cost per transformation
- `plans` — pricing tier definitions

### Environment Variables

See `.env.example`. Required:
- Clerk (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `CLERK_WEBHOOK_SECRET`)
- MongoDB (`MONGODB_URL`)
- Cloudinary (`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`)
- Stripe (`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`)
- `NEXT_PUBLIC_SERVER_URL` — base URL for Stripe redirects
