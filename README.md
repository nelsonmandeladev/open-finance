# Open Finance

An open-source ready to use template for banking applications, designed to provide a consistent and modern banking experience.

## Features

- Modular component library
- Responsive design
- Accessibility compliant
- Customizable themes
- Cross-browser compatibility
- Built-in security patterns
- Internationalization ready
- Figma icon loader system
- Clear and consistent use of TypeScript
- Build on top of Shadcn ui
- Global search params system using nuqs

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (>=18.18.0)
- pnpm (>=7)

### Installation

1.Clone the repository:

```bash
git clone https://github.com/nelsonmandeladev/open-finance.git
cd open-finance
```

2.Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in the `src/app` directory. The page auto-updates as you edit the file.

### Build

To build the project for production:

```bash
pnpm build
```

The output will be located in the `.next` directory.

### Linting

Run ESLint to check for code quality:

```bash
pnpm lint
```

## Project Structure

### Key Libraries

- **Next.js**: Framework for server-rendered React applications
- **Tailwind CSS**: Utility-first CSS framework for styling
- **react-i18next**: Internationalization library for React
- **clsx**: Utility for conditionally joining classNames
- **fs-extra**: File system utilities for managing assets
- **nuqs**: Use to manage global url query system with SSR compatible

### Scripts

- `pnpm dev`: Start the development server
- `pnpm build`: Build the project for production
- `pnpm build:icon`: Generate clean and reusable icons from the icons files in `@/assets` folder
- `pnpm lint`: Run ESLint to check for code quality

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
