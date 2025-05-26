# Code Snippets

A modern code snippets collection built with [Next.js](https://nextjs.org/) and TypeScript, designed to help developers quickly find and implement common code patterns and solutions. This project serves as a practical resource for front-end development patterns and best practices.

## Project Overview

This code snippets project provides a curated collection of reusable code examples, components, and patterns that can be easily integrated into various web development projects. It's built with performance and developer experience in mind, featuring a clean interface for browsing and implementing code snippets.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)

## Features

- **Code Organization**: Well-structured collection of code snippets by category and technology.
- **Syntax Highlighting**: Beautiful code presentation with proper syntax highlighting.
- **Responsive Design**: Fully responsive layout for all screen sizes.
- **Dark/Light Mode**: Theme support for comfortable viewing in any environment.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static website generation.
- **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with static typing.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.
- **[Prism.js](https://prismjs.com/)** - Lightweight syntax highlighting library.
- **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)** - Syntax highlighting component for React.

## Folder Structure

```plaintext
code-snippets/
├── app/                       # Source files for app pages
│   ├── snippets/              # Snippets section (page for code snippets)
│   ├── categories/            # Categories section (page for snippet categories)
│   ├── search/                # Search section (page for searching snippets)
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Main landing page
│
├── components/                # Reusable components
│   ├── ui/                    # UI(shadCN) components
│   ├── snippets/              # Snippet-related components
│   └── layout/                # Layout components
│
├── lib/                       # Utility functions and configurations
│   ├── snippets/              # Snippet data and utilities
│   ├── utils/                 # Helper functions
│   └── types/                 # TypeScript type definitions
│
├── styles/                    # Global styles and Tailwind configuration
├── public/                    # Static assets
└── content/                   # Snippet content and metadata
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Danielkhakbaz/Code-Snippets
   cd code-snippets
   ```

2. **Install dependencies**:

   ```bash
   yarn
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) **in your browser to see the project**.

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

- `dev`: Runs the app in development mode.
- `build`: Compiles the app for production.
- `start`: Starts the production server.
- `lint`: Lints and fixes files using ESLint.
- `fix`: Formats files using Prettier.
- `knip`: Analyzes the project structure and provides suggestions for improvement.
- `check-prettier`: Checks the code format without making changes.
