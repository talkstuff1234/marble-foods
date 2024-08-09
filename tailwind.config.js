/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                dmSans: ["DM Sans", "sans-serif"],
            },
            colors: {
                primaryLight: "#2E9343",
                primaryDark: "#0A1F0E",
                lightText: "#7E7E7E",
                darkText: "#212121",
            },
        },
    },
    plugins: [],
}
