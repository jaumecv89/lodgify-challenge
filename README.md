# Lodgify FE Technical Challenge

## Overview

This is a React application that allows users to manage and track tasks grouped into categories. The application uses Vite as the build tool, React for the user interface, and Tailwind CSS for styling. TypeScript is used for static typing to enhance code quality and developer experience.

## Features

- Grouped tasks with categories.
- Each task has a description, value, and a checkbox indicating completion status.
- Progress bar indicating the completion percentage of tasks.

## Tools Used

- **Vite**: A fast build tool that provides a streamlined development experience for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework that makes it easy to build stylish and responsive designs.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/jaumecv89/lodgify-challenge
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm run dev
   ```

Open http://localhost:3000 in your browser and test the app.

## Folder Structure

- **src/components**: Contains React components, such as TaskList and ProgressBar.
- **src/services**: Includes services for handling API requests. api.ts fetches task data.
- **src/types**: Houses TypeScript type definitions, such as taskTypes.ts.
- **src/utils**: Contains utility functions, like taskUtils.ts.

## Author

Jaume Campderros Vila
https://jaumecampderros.com
