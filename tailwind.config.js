/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-background': '#FFFBF9',
                'brand-border': '#FDEFEA',
                'brand-heading': '#2C3E50',    // Dark slate blue
                'brand-accent': '#E87A64',     // Soft, warm coral
                'brand-logo-v': '#E54B3C',     // Vibrant red-orange
                'brand-text': '#4A4A4A',       // Dark grey for readability
                'brand-deco-line': '#FADBD8',
                'brand-cta': '#E8743E',        // Orange for the button
            },
            fontFamily: {
                sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            backgroundImage: {
                'noise': "url('/noise-texture.png')",
            },
            dropShadow: {
                // Custom shadow for the CTA button to match the image
                'cta': '0 4px 10px rgba(232, 116, 62, 0.35)',
            },
        },
    },
    plugins: [],
};