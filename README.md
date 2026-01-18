# Personal Portfolio Site

A modern, minimal personal portfolio website showcasing frontend engineering skills, AI, and Web3 expertise.

## Features

- **Hero Section** - Animated typing effect with ChatGPT-inspired design
- **Work Experience** - Timeline with Uniswap-inspired data visualization
- **Portfolio** - Interactive project cards with filters and modals
- **Explorations** - Experimental projects with interactive demos
- **Photography** - Gallery with lightbox and category filters
- **Skills** - Technology stack visualization
- **Contact** - Social links and resume download
- **Dark Mode** - Theme toggle with system preference detection
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion animations throughout

## Tech Stack

- **Next.js 16** - App Router with React Server Components
- **React 19** - Latest React features
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Yet Another React Lightbox** - Photography gallery

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Add your images to the `public/images/` directory:
   - `portfolio/` - Portfolio project thumbnails and images
   - `explorations/` - Exploration project images
   - `photography/` - Photography collection
   - `companies/` - Company logos for work experience

3. Update data in `lib/data.ts`:
   - Personal information
   - Work experience
   - Portfolio projects
   - Explorations
   - Photography collection
   - Skills
   - Contact information

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Home page with all sections
└── globals.css         # Global styles and theme

components/
├── Hero.tsx            # Hero section
├── Experience.tsx     # Work experience timeline
├── Portfolio.tsx      # Portfolio showcase
├── Explorations.tsx   # Experimental projects
├── Photography.tsx    # Photo gallery
├── Skills.tsx         # Skills visualization
├── Contact.tsx        # Contact section
├── Navbar.tsx         # Navigation bar
├── ThemeToggle.tsx    # Dark mode toggle
├── demos/             # Interactive demo components
│   ├── WalletConnector.tsx
│   └── AIChat.tsx
└── ui/                # Reusable UI components
    ├── Button.tsx
    ├── Card.tsx
    ├── Badge.tsx
    ├── Dialog.tsx
    └── ImageWithFallback.tsx

lib/
├── data.ts            # All portfolio data
├── utils.ts           # Utility functions
└── animations.ts      # Framer Motion variants

types/
└── index.ts           # TypeScript type definitions
```

## Customization

### Colors and Theme

Edit `app/globals.css` to customize colors and theme variables.

### Data

All content is stored in `lib/data.ts`. Update the data objects to customize:
- Personal information
- Work experience entries
- Portfolio projects
- Explorations
- Photography collection
- Skills
- Contact information

### Images

Place images in the `public/images/` directory following the structure:
- Portfolio: `public/images/portfolio/`
- Explorations: `public/images/explorations/`
- Photography: `public/images/photography/`
- Company logos: `public/images/companies/`

## Building for Production

```bash
pnpm build
pnpm start
```

**Note:** There's a known compatibility issue between Tailwind CSS v4 and Next.js 16.1.3 that may cause build errors. The development server works correctly. This issue should be resolved in future versions of Next.js or Tailwind CSS. For production builds, you may need to:
- Use `next build --no-turbopack` flag, or
- Wait for updated versions of the dependencies

## Deployment

The site can be deployed to Vercel, Netlify, or any platform that supports Next.js.

## License

MIT
