/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html",
  "./public/message.html",
  './public/about.html', 
  './public/handles.html',
  "./public/portfolio.html",
  "./public/portfolio2.html",
  "./public/service.html"],
  theme: {
    extend: {
      width:{
        "w-100":"80%"
      },
    },
  },
  plugins: [],
}

