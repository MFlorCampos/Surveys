# Survey Management Application

This is a web application built with Next.js for managing surveys. The application provides a user-friendly interface for viewing and searching through surveys.

## Technology Stack & Dependencies

### Core Dependencies

- **Next.js (v15.1.7)**: The React framework for production, providing server-side rendering, routing, and development tools. Used as the foundation of the application.
- **React (v19.0.0)** & **React DOM (v19.0.0)**: Core libraries for building the user interface using components and managing the DOM.

### UI Components & Styling

- **@chakra-ui/react (v2.8.2)**: A modular and accessible component library that provides pre-built UI components. Used for:
  - Basic UI components (Input, Box, Container, etc.)
  - Layout management
  - Styling system

- **@emotion/react (v11.14.0)** & **@emotion/styled (v11.11.0)**: CSS-in-JS solution that powers Chakra UI's styling system.
- **framer-motion (v11.0.3)**: Animation library used by Chakra UI for smooth transitions and animations.

### Data Management & Tables

- **@tanstack/react-query (v5.66.0)**: Powerful data-fetching and state management library. Used for:
  - Managing server state
  - Caching API responses
  - Handling loading and error states

- **@tanstack/react-table (v8.21.2)**: Headless UI library for building powerful tables. Used for:
  - Displaying survey data in a table format
  - Sorting and filtering functionality

### Development Tools

- **TypeScript (v5)**: Adds static typing to JavaScript, enhancing code quality and developer experience.
- **ESLint (v9)**: Code linting tool for maintaining code quality.
- **next-themes (v0.4.4)**: Utility for managing theme changes in Next.js applications.
- **react-icons (v5.4.0)**: Provides a wide variety of icons for the UI.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Application Structure

The application follows a modern Next.js app directory structure:

- `/app`: Main application directory
  - `/api`: API routes for handling server-side logic
  - `/components`: React components
    - `SearchableSurveysTable.tsx`: Main table component with search functionality
    - `SurveysFetcher.tsx`: Data fetching component using React Query
    - `SurveysProvider.tsx`: Context provider for survey data
    - `SurveysTable.tsx`: Table implementation using TanStack Table
  - `/hooks`: Custom React hooks for data fetching and state management

## Features

- Server-side rendering for optimal performance
- Real-time search functionality for surveys
- Responsive table layout
- Error handling and loading states
- Type-safe development with TypeScript

## Development Commands

- `pnpm dev`: Starts the development server
- `pnpm build`: Creates a production build
- `pnpm start`: Runs the production server
- `pnpm lint`: Runs ESLint for code linting
