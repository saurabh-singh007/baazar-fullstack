/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            Lato: ["Lato", "ui-sans-serif", "system-ui"],
            Roboto: ["Roboto", "ui-serif", "Georgia"],
            Italian: ["Italiana", "ui-monospace", "SFMono-Regular"],
        },
        extend: {
          
        },
    },
    plugins: [ function ({ addUtilities }) {
      addUtilities({
        '.transparent-scrollbar': {
          overflow: 'auto',
        },
        '.transparent-scrollbar::-webkit-scrollbar': {
          width: '0',
          height: '0',
        },
      });
    },],
};
