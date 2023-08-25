/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            //add animation
            //add custom animation named bounce in tailwind
            //bezier is smoothness
            animation: {
                bounce: "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
                slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                fadeIn: "fadeIn 2s ease-in forwards"
            },
            keyframes: {
                bounce: {
                    from: { transform: "translateY(10px)" },
                    to: { transform: "translateY(0)" },
                },
                slideUp: {
                    from: { transform: "translateY(100%)" },
                    to: { transform: "translateY(0)" },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 }
                }
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar")
    ],
}