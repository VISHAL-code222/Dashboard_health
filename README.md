# Health Dashboard

This project is a Health Dashboard application built to help users track and visualize their health-related data. It provides an overview of health status, upcoming appointments, activity feeds, and a calendar view for managing schedules.

## How it was made

The application is developed as a single-page application (SPA) using modern web technologies. The frontend is built with React, a popular JavaScript library for building user interfaces. Component-based architecture is followed to create reusable UI elements.

Routing is handled by `react-router-dom` to navigate between different sections of the dashboard like the main dashboard, appointments, calendar, and statistics.

Styling is done using CSS, with separate CSS files for each component to maintain modularity and ease of maintenance.

## Tools and Technologies Used

The project leverages several tools and libraries to facilitate development, building, and an enhanced user experience:

*   **Core Framework/Libraries:**
    *   [**React** (`react`)](https://react.dev/): A JavaScript library for building user interfaces.
    *   [**React DOM** (`react-dom`)](https://react.dev/): Serves as the entry point to the DOM and server renderers for React.
    *   [**React Router DOM** (`react-router-dom`)](https://reactrouter.com/): For declarative routing in React applications.
    *   [**Framer Motion** (`framer-motion`)](https://www.framer.com/motion/): A production-ready motion library for React.

*   **Build Tool & Development Server:**
    *   [**Vite** (`vite`)](https://vitejs.dev/): A next-generation frontend tooling that provides a faster and leaner development experience for modern web projects. It handles the development server, HMR (Hot Module Replacement), and optimized production builds.

*   **Linting & Code Quality:**
    *   [**ESLint** (`eslint`)](https://eslint.org/): A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
    *   `@eslint/js`: Core ESLint rules.
    *   `eslint-plugin-react-hooks`: Enforces rules of Hooks.
    *   `eslint-plugin-react-refresh`: ESLint plugin for React Refresh.
    *   `globals`: Defines global variables for ESLint.

*   **Development Dependencies:**
    *   `@types/react`, `@types/react-dom`: TypeScript type definitions for React.
    *   `@vitejs/plugin-react`: Vite plugin for React projects.

## Project Structure

The project is organized as follows:

*   `public/`: Contains static assets that are served directly.
*   `src/`: Contains the main source code for the application.
    *   `assets/`: Stores images and other static assets used within the components.
    *   `Components/`: Houses all the React components that make up the UI.
    *   `CSS/`: Contains CSS files for styling the components.
    *   `data.js`: Potentially holds sample or static data for the application.
    *   `routes/`: Contains components that define the different pages/views of the application.
    *   `App.jsx`: The main application component where routing and layout are typically defined.
    *   `main.jsx`: The entry point of the React application.
    *   `index.css`, `App.css`: Global and application-level styles.
*   `.gitignore`: Specifies intentionally untracked files that Git should ignore.
*   `eslint.config.js`: Configuration file for ESLint.
*   `index.html`: The main HTML file that serves as the entry point for the SPA.
*   `package.json`: Lists project dependencies, scripts, and metadata.
*   `package-lock.json`: Records the exact versions of dependencies.
*   `README.md`: This file, providing information about the project.
*   `vite.config.js`: Configuration file for Vite.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode using Vite.
Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint`

Runs ESLint to check for linting errors in the codebase.

### `npm run preview`

Serves the production build locally to preview the application.