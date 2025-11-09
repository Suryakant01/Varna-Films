# Varna-Films: A Creative Portfolio Website

Varna-Films is a visually-rich, animated single-page portfolio website built with React, Vite, and Tailwind CSS. It serves as a digital showcase for a creative agency specializing in film production, branding, and art curation. The site features a modern design with smooth, scroll-triggered animations and a clean, component-based architecture.

[](https://your-live-demo-url.com)
> *(Replace the image and link above with a screenshot and a live demo of your project)*

## ✨ Key Features

-   **Stunning Animations**: Fluid animations powered by **Framer Motion** and triggered on scroll with **React Intersection Observer** to create an engaging user experience.
-   **Responsive Design**: A fully responsive layout built with **Tailwind CSS**, ensuring a seamless experience on all devices, from mobile phones to widescreen desktops.
-   **Component-Based Architecture**: Developed with a clean and modular structure using React components for easy maintenance and scalability.
-   **Client-Side Routing**: Utilizes **React Router DOM** to handle navigation to separate "service" pages without full page reloads.
-   **Functional Contact Form**: A client-side validated contact form ready to send submissions to a backend API.
-   **Modern Tooling**: Built with **Vite** (using the high-performance **Rolldown** bundler) for an incredibly fast development server and optimized builds.
-   **Custom Theming**: A unique brand identity is established through a custom color palette and font selection configured in Tailwind CSS.

## 🚀 Technologies Used

-   **Frontend**: [React 19](https://react.dev/), [Vite (Rolldown)](https://vite.dev/guide/rolldown)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Routing**: [React Router DOM](https://reactrouter.com/)
-   **Scroll Animations**: [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)
-   **Linting**: [ESLint](https://eslint.org/)

## 🔧 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/varna-films.git
    cd varna-films
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    The contact form requires a backend API endpoint to send data. Create a `.env` file in the root of the project and add your API URL.

    ```
    # .env
    VITE_API_URL="https://your-backend-api-endpoint.com/contact"
    ```
    If you don't have an API endpoint, the form will show a configuration error but the rest of the site will work perfectly.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

## 📜 Available Scripts

This project comes with several pre-configured scripts:

-   `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
-   `npm run build`: Bundles the application for production into the `dist` folder.
-   `npm run lint`: Runs ESLint to analyze the code for potential errors and style issues.
-   `npm run preview`: Starts a local server to preview the production build from the `dist` directory.

## 📁 Project Structure

The project is organized with a clear and logical structure, primarily within the `src` directory.

```
varna-films/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, SVGs, and other media
│   ├── components/       # Reusable React components
│   │   ├── AboutTeam.jsx
│   │   ├── AboutUs.jsx
│   │   ├── ArtCuration.jsx
│   │   ├── Body.jsx        # Main router setup
│   │   ├── Branding.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FilmProduction.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx        # Layout component with NavBar and Outlet
│   │   ├── HomePage.jsx    # Main landing page content
│   │   ├── Logo.jsx
│   │   ├── NavBar.jsx
│   │   ├── Navigation.jsx
│   │   ├── Portfolio.jsx
│   │   └── Services.jsx
│   ├── utils/
│   │   └── circularMotion.ts # Framer Motion animation variants
│   ├── App.jsx             # Root application component
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.jsx            # Application entry point
├── .env.example          # Example environment variables
├── eslint.config.js      # ESLint configuration
├── index.html            # Main HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```