/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: 'hsl(75, 94%, 57%)',
        White: '#ffffff',
        Grey700: '#333333',
        Grey800: '#1f1f1f',
        Grey900: '#141414',
      },
    }
  },
  plugins: [],
};
