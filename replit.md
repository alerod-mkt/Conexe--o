# Overview

This is a modern full-stack web application for a landing page called "Truque da Briga Zero" (Zero Fight Trick), which appears to be a digital product/course targeted at Christian married women. The application uses a monorepo structure with a React frontend and Express backend, built with modern web technologies and styled with shadcn/ui components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **Animations**: Framer Motion for smooth transitions and animations
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and building

## Backend Architecture  
- **Framework**: Express.js with TypeScript
- **Module System**: ESM (ES Modules)
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for bundling the server

## Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL (likely Neon Database based on dependencies)
- **Migrations**: Drizzle Kit for schema management
- **Development Storage**: In-memory storage implementation for development
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple

# Key Components

## Landing Page Structure
The application is structured as a single-page landing page with multiple sections:
- Hero section with urgency messaging
- Problem identification section 
- Solution presentation
- Author credibility section
- Social proof/testimonials
- Product details and pricing
- FAQ section
- Contact form
- Footer

## UI Components
- Complete shadcn/ui component library implementation
- Custom components like floating CTA and countdown timer
- Mobile-responsive design with mobile-specific features
- Form handling with React Hook Form integration

## Database Schema
- Simple user management system with username/password authentication
- Extensible schema design using Drizzle ORM
- Zod schema validation integration

# Data Flow

1. **Frontend**: React components consume data through TanStack Query
2. **API Layer**: Express routes handle HTTP requests (currently minimal)
3. **Data Layer**: Drizzle ORM interfaces with PostgreSQL database
4. **Development**: In-memory storage for rapid development iteration

# External Dependencies

## Frontend Libraries
- **UI**: Radix UI primitives, Lucide React icons
- **Utilities**: clsx, tailwind-merge for className handling
- **Date Handling**: date-fns for date manipulation
- **Animations**: Framer Motion for UI animations
- **Forms**: React Hook Form with Zod resolvers

## Backend Libraries
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: Drizzle ORM with PostgreSQL support
- **Session Management**: connect-pg-simple for session storage

## Development Tools
- **TypeScript**: Full TypeScript support across the stack
- **Vite**: Development server with HMR and build optimization
- **PostCSS**: CSS processing with Tailwind CSS
- **ESLint/Prettier**: Code quality and formatting (implied by structure)

# Deployment Strategy

## Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Environment**: Supports both development and production environments

## Development Workflow
- Hot Module Replacement (HMR) for fast development
- Shared TypeScript configuration across frontend/backend
- Path aliases for clean imports (`@/` for client, `@shared/` for shared code)

## Production Considerations
- Static file serving through Express in production
- Environment-based configuration
- Database migrations through Drizzle Kit
- Session persistence through PostgreSQL

## Architecture Decisions

### Monorepo Structure
**Problem**: Managing shared code and types between frontend and backend
**Solution**: Unified TypeScript configuration with shared schema definitions
**Benefits**: Type safety across the full stack, easier maintenance, shared validation logic

### Styling Strategy  
**Problem**: Consistent, maintainable UI components
**Solution**: shadcn/ui + Tailwind CSS with CSS variables
**Benefits**: Design system consistency, easy theming, accessible components

### State Management
**Problem**: Server state synchronization and caching
**Solution**: TanStack Query for server state, local React state for UI state
**Benefits**: Automatic caching, background refetching, optimistic updates

### Database Strategy
**Problem**: Type-safe database operations with good developer experience
**Solution**: Drizzle ORM with Zod schema validation
**Benefits**: Type safety, migration management, schema validation

## Recent Changes: Latest modifications with dates

- January 17, 2025: 
  - Removed "Ainda tem dúvidas" contact section
  - Changed branding from "Truque da Briga Zero" to "Conexão Conjugal"
  - Added header with navigation menu and logo
  - Updated footer with disclaimer text and proper anchor links
  - Removed social media icons from footer
  - Fixed numbered day cards in product details section
  - Made all CTA buttons redirect to pricing section
  - Added scroll offset for fixed header navigation
  - Created realistic SVG avatars for testimonial cards instead of simple initials
  - Enhanced "Conexão Conjugal" logo with heart icon and elegant serif font
  - Improved logo component with reusable design for header and footer