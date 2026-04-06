# 🎨 RJ Graphics - Demo Business Website

![RJ Graphics Preview](https://rjgraphics.netlify.app/images/profile.jpg)

> A modern, responsive demo website created to showcase a complete digital storefront for a custom instrument graphics business. 

**[Live Demo](https://rjgraphics.netlify.app/) | [Report Bug](https://github.com/Akshayjg2204/graphics-website/issues) | [Request Feature](https://github.com/Akshayjg2204/graphics-website/issues)**

## ✨ Overview

This project is a high-performance portfolio piece designed to demonstrate modern web development practices. It simulates a functional business website, providing a clear user journey from viewing services to exploring a dynamic gallery and initiating contact. 

### Key Features
* **Modern UI/UX:** Built with a clean, component-driven design system.
* **Services Grid & Gallery:** Showcases simulated business offerings and a dynamic portfolio of past work.
* **Direct Communication Integration:** Includes functional UI elements for WhatsApp chat routing and direct-dial phone links.
* **Dark/Light Mode:** Includes a seamless theme toggler for user preference.
* **Fully Responsive:** Optimized UI for seamless browsing across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
* **Package Manager:** pnpm
* **Hosting/Deployment:** Netlify / Vercel

## 🚀 Getting Started

To get a local copy of this project up and running, follow these steps.

### Prerequisites

Make sure you have Node.js installed, along with pnpm.

    npm install -g pnpm

### Installation

1. **Clone the repository:**

    git clone [https://github.com/Akshayjg2204/graphics-website.git](https://github.com/Akshayjg2204/graphics-website.git)

2. **Navigate to the project directory:**

    cd graphics-website

3. **Install dependencies:**

    pnpm install

4. **Start the development server:**

    pnpm dev

Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

    ├── app/                  # Next.js App Router (pages & layouts)
    │   ├── globals.css       # Global styling
    │   ├── layout.tsx        # Root layout
    │   └── page.tsx          # Main landing page
    ├── components/           # React components
    │   ├── ui/               # shadcn/ui component library
    │   ├── hero.tsx          # Hero section component
    │   ├── gallery.tsx       # Portfolio gallery component
    │   ├── services.tsx      # Services overview component
    │   ├── contact.tsx       # Contact form & info component
    │   └── ...               # Other modular UI blocks
    ├── hooks/                # Custom React hooks (e.g., use-mobile)
    ├── lib/                  # Utility functions (e.g., utils.ts)
    ├── public/               # Static assets (images, icons)
    │   └── images/           # Drum head and profile graphics
    ├── styles/               # Additional global styles
    ├── .env.development.local # Environment variables
    ├── components.json       # shadcn/ui configuration
    ├── next.config.mjs       # Next.js configuration
    ├── package.json          # Project metadata and dependencies
    └── tsconfig.json         # TypeScript configuration
