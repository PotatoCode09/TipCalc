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
│   ├── components/          # Reusable UI components
│   │   ├── sections/       # Feature-specific components
│   │   └── ui/             # Basic UI elements
│   └── page.tsx            # Main application page
└── logic/                  # Business logic and calculations
    ├── calculations.ts     # Tip calculation functions
    ├── handlers.ts         # Event handlers
    ├── types.ts           # TypeScript type definitions
    └── validation.ts      # Input validation
```

## How It Works

1. Enter the bill amount
2. Select a tip percentage or enter a custom percentage
3. Specify the number of people splitting the bill
4. View the calculated tip amount per person and total per person
5. Use the reset button to start over

## Development

The app uses a modular architecture with separated concerns:
- UI components are organized by feature
- Business logic is extracted into separate modules
- Type safety is maintained throughout with TypeScript
- Responsive design ensures great UX on all devices

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
