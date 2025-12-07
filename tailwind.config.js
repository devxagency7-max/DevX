/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                devx: {
                    dark: '#0A0C1A',
                    blue: '#1B1D35',
                    accent: '#4D7BFF',
                    purple: '#A78BFF',
                    glass: 'rgba(15, 18, 34, 0.6)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
}
