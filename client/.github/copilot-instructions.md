# AI Coding Agent Instructions

## Project Overview

This project is a React-based chatbot application built with Vite. It integrates with Google's Gemini API for generative AI capabilities. The application uses Tailwind CSS for styling and follows a modular structure for maintainability.

### Key Components

- **`src/App.jsx`**: The main entry point for the React application. Contains the chat UI and logic for interacting with the Gemini API.
- **`src/gemini.js`**: A utility file for handling API requests to the Gemini service.
- **`src/index.css`**: Configures Tailwind CSS for styling.

### External Dependencies

- **Gemini API**: Requires an API key stored in `.env` as `VITE_GEMINI_API_KEY`.
- **Tailwind CSS**: Installed and configured for responsive and modern UI design.

## Developer Workflows

### Running the Development Server

To start the development server:

```bash
npm run dev
```

This will launch the application at `http://localhost:5173/`.

### Building for Production

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Linting

ESLint is configured for this project. To run lint checks:

```bash
npm run lint
```

## Project-Specific Conventions

- **Environment Variables**: All sensitive keys (e.g., `VITE_GEMINI_API_KEY`) are stored in `.env` and accessed via `import.meta.env`.
- **API Integration**: Use `src/gemini.js` for all interactions with the Gemini API. Avoid duplicating API logic elsewhere.
- **Styling**: Use Tailwind CSS classes for all styling. Avoid inline styles unless absolutely necessary.

## Example Patterns

### Adding a New Feature

1. Create a new component in `src/components/`.
2. Import and use the component in `App.jsx`.
3. If the feature requires API interaction, add the logic to `gemini.js`.

### Debugging API Issues

- Check the network tab in your browser's developer tools for failed requests.
- Ensure the API key in `.env` is correct and matches the required format.

## Key Files

- **`vite.config.js`**: Configures Vite for development and production.
- **`package.json`**: Lists dependencies and scripts.
- **`README.md`**: Provides an overview of the project setup.

For further questions or issues, consult the README or reach out to the project maintainer.
