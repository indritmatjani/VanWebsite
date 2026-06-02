# VanLife React App

A React + Vite van rental experience with host dashboard pages and a MirageJS mock API.

## Project Overview

This application lets users browse available vans, filter by category, and view detailed van information. It includes a host section with a dashboard, income summary, and guest reviews.

## Key Features

- Responsive React UI built with Vite
- Client-side routing using React Router v7
- Mock backend with MirageJS for `/api/vans` and host endpoints
- Host dashboard, income report, and review summary pages
- Dynamic van filtering and detail pages

## Structure

- `index.jsx` / `index-new.jsx` - application entry points
- `components/` - shared layout, header, footer, and host navigation
- `pages/` - Home, About, Vans, VanDetail, NotFound, and host pages
- `server.js` - MirageJS server setup with mock van data
- `api.js` - API helper for fetching vans
- `index.css` - global styling and page-specific styles

## Available Scripts

Use the package manager to run the project.

```bash
npm install
npm run dev -- --host
```

Open the app in your browser at `http://localhost:5173` (or the next available port).

To build for production:

```bash
npm run build
```

## Project Routes

- `/` - Home
- `/about` - About
- `/vans` - Van listing
- `/vans/:id` - Van detail page
- `/host` - Host dashboard
- `/host/income` - Host income summary
- `/host/reviews` - Host reviews
- `/host/vans` - Host van listings
- `/host/vans/:id` - Host van detail pages

## Notes

- The app uses MirageJS so no external API is required.
- The host routes are implemented as nested React Router routes.

## Push to GitHub

This repository is initialized locally with a `main` branch. Add a GitHub remote and push when ready:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
