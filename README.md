# Whekel - Landing Page

A modern, responsive landing page website for Whekel - a one-stop solution for all transportation needs including ride, parcel, and freight services.

## Features

- 🚗 **Ride Services** - Book rides with multiple vehicle options
- 📦 **Parcel Delivery** - Fast and reliable parcel delivery service
- 🚚 **Freight Services** - Professional freight transportation for businesses
- 📱 **App Download** - Easy access to download links
- 🎨 **Modern UI** - Beautiful, responsive design
- ⚡ **Fast Performance** - Built with Vite for optimal performance

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
whekel/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Pages

1. **Home** (`/`) - Main landing page with hero section, features, and services preview
2. **Services** (`/services`) - Detailed information about ride, parcel, and freight services
3. **About** (`/about`) - Company mission, vision, values, and statistics

## Customization

You can customize the colors, fonts, and content by modifying:
- CSS variables in `src/index.css`
- Component files in `src/pages/` and `src/components/`
- Content in the respective JSX files

## License

This project is created for Whekel transportation services.

