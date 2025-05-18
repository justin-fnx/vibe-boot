# vibe-boot

A modern Next.js project template specifically designed for rapid application development through vibe coding. This template serves as a foundation for creating multiple applications with consistent architecture, best practices, and performance optimizations. By using this template, you can quickly bootstrap new projects while maintaining high standards in code quality, SEO, and user experience.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔍 SEO optimized
- 📱 Responsive design
- ⚡ Server-side rendering
- 🎯 Performance focused

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **State Management**: React Context API / Zustand
- **Form Handling**: React Hook Form
- **API Integration**: SWR / React Query

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/justin-fnx/vibe-boot.git
cd vibe-boot
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                 # App Router pages and layouts
├── components/         # Reusable UI components
│   ├── ui/            # Basic UI components
│   └── features/      # Feature-specific components
├── lib/               # Utility functions and shared logic
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── styles/            # Global styles and Tailwind config
└── api/               # API routes (if needed)
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 