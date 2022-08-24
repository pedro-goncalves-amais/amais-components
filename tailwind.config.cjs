/** @type {import('tailwindcss').Config} */

const defaultTailwindColors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...defaultTailwindColors,
                amais: {
                    200: "#d4a3ff",
                    300: "#9d2bff",
                    400: "#8025ff",
                    500: "#7200d3",
                },
            },
        },
    },
    plugins: [],
};
