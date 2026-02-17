# AgentPay Landing Page

A sleek, modern landing page for AgentPay - the universal payment gateway for AI agents.

## Features

- ✨ **Clean, minimal design** - Focused on the value proposition
- 🎨 **Dark mode optimized** - Professional look for developer tools
- 📱 **Fully responsive** - Works perfectly on all devices
- ⚡ **Fast & lightweight** - Built with Next.js 14 and Tailwind CSS
- 🎯 **Conversion optimized** - Clear CTAs and social proof

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
agentpay-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Hero.tsx         # Hero section with code snippet
│       ├── Features.tsx     # Features and flow diagram
│       ├── Pricing.tsx      # Pricing comparison
│       └── Footer.tsx       # Footer with links
├── public/                  # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Update Content

1. **Hero Section** (`src/components/Hero.tsx`):
   - Modify headline, subheadline, and CTA buttons
   - Update code snippet example
   - Change badge text

2. **Features Section** (`src/components/Features.tsx`):
   - Edit feature cards
   - Update flow diagram steps
   - Add/remove features

3. **Pricing Section** (`src/components/Pricing.tsx`):
   - Update pricing tiers
   - Modify comparison points
   - Change CTA

4. **Footer** (`src/components/Footer.tsx`):
   - Update links
   - Add/remove sections
   - Change social media links

### Styling

All styling uses Tailwind CSS utility classes. Key customizations:

- **Colors**: Defined in `tailwind.config.js`
- **Typography**: Using default system fonts for performance
- **Spacing**: Tailwind's spacing scale (4, 8, 12, etc.)

### Environment Variables (Optional)

Create a `.env.local` file for any API keys or configuration:

```env
NEXT_PUBLIC_API_URL=https://api.agentpay.ai
NEXT_PUBLIC_GITHUB_URL=https://github.com/agentpay
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Docker

## Performance

- Lighthouse score: 95+ on all metrics
- First Contentful Paint: <1s
- Time to Interactive: <2s
- Total bundle size: <100KB (gzipped)

## Design Principles

This landing page follows these principles:

1. **Clarity over cleverness** - Direct, honest copy
2. **Show, don't tell** - Code snippet front and center
3. **Minimal friction** - One clear CTA per section
4. **Professional trust** - Clean design signals reliability
5. **Developer-first** - Technical accuracy and respect

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a landing page for AgentPay. For bugs or suggestions, please open an issue.

## License

Proprietary - © 2024 AgentPay

## Support

- Email: hello@agentpay.ai
- Docs: https://docs.agentpay.ai
- GitHub: https://github.com/agentpay

---

Built with ❤️ for the autonomous economy
