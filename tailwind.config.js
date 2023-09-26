// tailwind.config.js

module.exports = {
  purge: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "gpt-message-box-gray": "#40414F",
        "gpt-sidebar-dark-gray": "#202123",
        "gpt-AI-message-area-gray": "#444655",
        "gpt-USER-message-area-gray": "#343640",
        "gpt-info-text-gray": "#c5c5d2",
      },
      fontFamily: {
        sans: ["Helvetica", "Clear Sans", "sans-serif"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
