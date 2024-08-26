/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html", 
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
        './node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                blue: "#2997FF",
                gray: {
                    DEFAULT: "#86868b",
                    100: "#94928d",
                    200: "#afafaf",
                    300: "#42424570",
                },
                zinc: "#101010",
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
};