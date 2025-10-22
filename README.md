# SPLITTER - Tip Calculator

A modern, responsive tip calculator built with Next.js and TypeScript. SPLITTER helps you quickly calculate tips and split bills among multiple people with an intuitive and beautiful interface.

## Features

- **Bill Input**: Enter the total bill amount
- **Tip Selection**: Choose from preset tip percentages (5%, 10%, 15%, 25%, 50%) or enter a custom tip percentage
- **People Count**: Specify how many people are splitting the bill
- **Real-time Calculations**: Instantly see tip amount per person and total amount per person
- **Reset Functionality**: Clear all inputs with one click
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth interactions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Build Tool**: Turbopack

## Project Structure

```
src/
├── app/
│   ├── components/              # All React components
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── InputField.tsx
│   │   │   ├── ResultDisplay.tsx
│   │   │   ├── TipButton.tsx
│   │   │   └── index.ts
│   │   ├── BillInput.tsx       # Input components
│   │   ├── PeopleInput.tsx
│   │   ├── TipSelection.tsx
│   │   ├── ResultsDisplay.tsx
│   │   ├── CalculatorInputs.tsx # Main components
│   │   ├── CalculatorResults.tsx
│   │   └── index.ts            # Barrel exports
│   ├── page.tsx                # Main application page
│   ├── layout.tsx              # Root layout component
│   └── globals.css             # Global styles
├── logic/                      # Business logic and calculations
│   ├── calculations.ts         # Tip calculation functions
│   ├── handlers.ts             # Event handlers
│   ├── validation.ts           # Input validation
│   ├── types.ts                # TypeScript type definitions
│   ├── constants.ts            # App constants
│   └── index.ts                # Barrel exports
└── index.ts                    # Main entry point

docs/
└── design/                     # Design assets and mockups
    ├── active-states.jpg
    ├── desktop-design-completed.jpg
    ├── desktop-design-empty.jpg
    └── mobile-design.jpg

public/
└── images/                     # Static assets
    ├── favicon-32x32.png
    ├── icon-dollar.svg
    └── icon-person.svg
```

## How It Works

1. Enter the bill amount
2. Select a tip percentage or enter a custom percentage
3. Specify the number of people splitting the bill
4. View the calculated tip amount per person and total per person
5. Use the reset button to start over

## Development

The app uses a clean, modular architecture with separated concerns:

### Architecture Principles
- **Component Organization**: Flattened structure with all components in one directory for easier navigation
- **Separation of Concerns**: UI components, business logic, and validation are clearly separated
- **Type Safety**: Full TypeScript coverage with proper type definitions
- **Barrel Exports**: Clean import statements using index files
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Key Features
- **Real-time Validation**: Input validation with user-friendly error messages
- **Custom Tip Support**: Both preset percentages and custom tip input
- **Accessibility**: Proper labeling and keyboard navigation
- **Performance**: Optimized with Next.js 15 and Turbopack
- **Clean Code**: Well-organized, maintainable codebase

### Code Quality
- **ESLint**: Configured for code quality and consistency
- **TypeScript**: Strict type checking enabled
- **Modular Structure**: Easy to maintain and extend
- **No Linting Errors**: Clean, production-ready code

## Build and Deploy

To build the app for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

The app is ready to be deployed to any platform that supports Next.js applications.

## Recent Improvements

### File Structure Refactoring
- ✅ **Cleaned up root directory** - Removed unnecessary files and organized assets
- ✅ **Flattened component structure** - Moved all components to a single directory for better navigation
- ✅ **Improved organization** - Design assets moved to `docs/design/`, static assets to `public/images/`
- ✅ **Enhanced imports** - Updated all import statements and added barrel exports
- ✅ **Better maintainability** - Cleaner, more maintainable codebase structure

### Code Quality Improvements
- ✅ **Zero linting errors** - All code passes ESLint checks
- ✅ **Consistent imports** - Clean, organized import statements
- ✅ **Type safety** - Full TypeScript coverage throughout the application
- ✅ **Modular architecture** - Well-separated concerns and reusable components

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
