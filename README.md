# Circle - Events Web App

The web front end for Circle (circle.ooo), a social events platform where users can discover, host, and register for events. The application renders marketing and informational pages, lets visitors browse premium and nearby events, create and edit events, check out and pay for tickets, manage user profiles and favorites, and build shareable digital business cards. Authentication and data are backed by Firebase, and ticket payments are processed through Stripe.

## Tech Stack

- **Framework:** Next.js 13 (Pages Router)
- **Language:** JavaScript (React 18)
- **Styling:** Tailwind CSS, tw-elements, styled-components, Emotion, Material UI (MUI)
- **Backend services:** Firebase (Authentication, Firestore, Storage) with Google, Apple, and Facebook auth providers
- **Payments:** Stripe (`stripe`, `@stripe/react-stripe-js`, `@stripe/stripe-js`) via Next.js API routes
- **Auth / social:** `react-linkedin-login-oauth2`, `react-google-recaptcha`, `react-firebase-hooks`
- **Maps & location:** `react-places-autocomplete`, `react-geocode`, `geolib`
- **Dates & time:** `dayjs`, `luxon`, `moment`, `@mui/x-date-pickers`
- **QR & sharing:** `qrcode`, `react-qr-code`, `react-share`, `add-to-calendar-button-react`
- **UI utilities:** `react-responsive-carousel`, `react-modal`, `react-toastify`, `react-simple-toasts`, `react-rating-stars-component`, `react-cropper`, `react-color`, `aos`, `react-icons` / `react-feather`
- **Tooling:** ESLint (`eslint-config-next`), PostCSS, Autoprefixer

## Features

- Home experience with hero section, feature highlights, testimonials, and curated event tabs (premium events, events near me, and more).
- Event discovery with listing and detail pages, plus per-event routes for viewing, editing, and checkout.
- Event creation and editing flows.
- Ticket checkout with Stripe payment intents handled by server-side API routes.
- Firebase-based authentication supporting Google, Apple, and Facebook sign-in.
- LinkedIn OAuth login with dedicated auth, details, and email API routes.
- User profile pages and a favorites list.
- Digital business card ("digicard") creation and viewing.
- Location search and geocoding for event discovery.
- Shareable content, QR codes, and add-to-calendar support.
- Informational/legal pages: About, Contact, FAQ, Terms, Privacy Policy, GDPR, Security, Our Work, Feedback, and Host Events.
- Responsive design with reusable SVG icon set and small shared components.

## Project Structure

```
circle-testing/
├── pages/
│   ├── index.js                Home page
│   ├── _app.js, _document.js    Next.js app and document setup
│   ├── events/                 Event listing and detail routes
│   ├── event/[eventid]/        Event view, edit, and checkout
│   ├── digicard/               Create and view digital business cards
│   ├── [uid]/                  User profile and favorites
│   ├── api/                    Server routes: payment (Stripe), ticket, linkedin, database
│   └── *.js                    Static pages (about, contact, faq, terms, privacy, gdpr, security, etc.)
├── components/
│   ├── Home/                   Home sections (Hero, Features, Testimonials, Events, etc.)
│   ├── SvgIcons/               Icon components
│   ├── Common/                 Shared layout components (e.g. Footer)
│   ├── Location/               Location search input
│   └── ...                     Page-specific component groups (Terms, Privacy, GDPR, Security, etc.)
├── context/context.js          React context (create-event popup state)
├── firebase.js                 Firebase app, auth, Firestore, and storage initialization
├── utils/ , util/              Helper functions and shared utilities
├── styles/globals.css          Global styles
├── public/                     Static assets (SVGs, images)
├── tailwind.config.js          Tailwind configuration
├── next.config.js              Next.js configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js and npm
- Firebase project credentials and Stripe API keys configured for the app

### Installation

```bash
npm install
```

### Running in development

```bash
npm run dev
```

The app runs on the default Next.js port (http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start the Next.js development server.
- `npm run build` - Build the app for production.
- `npm start` - Start the production server.
- `npm run lint` - Run ESLint.

## Environment Variables

- `NEXT_PUBLIC_BUILD_VERSION` - Optional build number displayed in the site footer.

Firebase configuration and Stripe keys are used by the app; provide them through your own configuration/secret management and never commit real secret values.

## Author

Author: Shehzad Asadullah - https://github.com/shehzadasad
