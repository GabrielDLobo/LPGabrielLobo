/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        html5icon: "#EC6231",
        css3icon: "#0974BC",
        javascripticon: "#F1C22D",
        typescripticon: "#2F74C0",
        tailwindcss: "#38BDF8",
        sassicon: "#C76494",
        djangoicon: "#092D1F",
        nodejsicon: "#84BF08",
        mysqlicon: "#EA8C10",
        pythonicon: "#4382B3",
        githubicon: "#F5F5F5",
        seleniumicon:"#00AE00",
        pyautoguiicon: "#F5F5F5"
      }
    },
  },
  plugins: [],
}

