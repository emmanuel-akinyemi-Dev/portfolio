/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./public/message.html", "./public/portfolio.html", " ./public/about.html"],
  theme: {
    extend: {
      width:{
        "w-100":"80%"
      },
    },
  },
  plugins: [],
}

