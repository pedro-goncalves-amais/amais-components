/** @type {import('tailwindcss').Config} */

const defaultTailwindColors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...defaultTailwindColors,
                amais: {
                    100: "#d4a3ff",
                    200: "#9d4de1",
                    300: "#9d2bff",
                    400: "#8025ff",
                    500: "#7200d3",
                },
            },
        },
    },
    plugins: [],
};
