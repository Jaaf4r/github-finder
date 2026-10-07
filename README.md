# GitHub Finder

A responsive frontend application that searches for GitHub users and displays their profile information and recently updated public repositories.

## Features

- Search for a GitHub user by username
- Display the user's avatar, name, bio, profile link, and public repository count
- Display the six most recently updated public repositories
- Show loading, error, and empty-repository states
- Disable the search button while requests are running
- Responsive layout with automatic light and dark themes

## Built With

- HTML
- CSS
- Vanilla JavaScript
- GitHub REST API
- npm and Vite

## Getting Started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Installation

From the project directory, install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for testing.

## Project Structure

```text
frontend-05/
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── app.js
    ├── github-api.js
    ├── ui.js
    └── style.css
```

## How It Works

When the form is submitted, the application requests the user's profile and repositories in parallel. The returned data is then passed to separate rendering functions that update the page.

The project uses the public GitHub API without authentication, so GitHub's unauthenticated request rate limit applies.
