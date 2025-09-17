# Client App (React + Vite)

Production-focused notes for deploying this client to Vercel or any static host and connecting it to the backend API.

## Environment Variables

- `VITE_API_URL`: Base URL of your backend API. Examples:
  - Local: `http://localhost:5001`
  - Render: `https://your-backend.onrender.com`
  - Custom domain: `https://api.yourdomain.com`
- `VITE_GOOGLE_CLIENT_ID`: Google OAuth client id used by `@react-oauth/google`.

How it’s used:

- `client/src/api/axios.js` reads `import.meta.env.VITE_API_URL` for the Axios `baseURL` and falls back to `window.__API_URL__` or `http://localhost:5001`.
- With Vite, set variables in `.env` files or the Vercel project settings → Environment Variables.

## Auth & Cookies

- Axios is configured with `withCredentials: true` to send cookies to the backend.
- For cross-site deployments (frontend on Vercel, backend on Render), the backend must:
  - Enable CORS with `credentials: true` and explicit `origin` matching the frontend URL.
  - Set auth cookies with `secure: true` and `sameSite: 'none'` when using HTTPS on different domains.

## Case-Sensitive Imports

- Vercel builds on Linux, so import paths are case-sensitive. Ensure paths like `../api/logs/apiLogs` match the actual file/folder names exactly.

## Local Development

1. Install dependencies: `npm install`
2. Create `.env.local` with at least:
   - `VITE_API_URL=http://localhost:5001`
   - `VITE_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID`
3. Start dev server: `npm run dev`

## Build & Preview

- Build: `npm run build`
- Preview locally: `npm run preview`

## Troubleshooting

- 401s for guests: The client handles unauthenticated states gracefully; protected routes should check auth state before calling APIs.
- Mixed content or cookie issues: Verify HTTPS, CORS `origin`, and cookie `sameSite`/`secure` settings on the backend.
- PostCSS/Tailwind: Ensure any `@import` directives are at the top of CSS files.

## Folder Pointers

- Axios instance: `client/src/api/axios.js`
- Auth APIs and logging: `client/src/api/logs/apiLogs.js`
- Auth context: `client/src/context/AuthContext.jsx`
