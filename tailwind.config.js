/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm : '290px',
      mm : '375px',
      lm : '425px',
      t : '768px',
      l : '1024px',
      ll : '1440px',
      k: '2560px',
      my:'2700px',
      
      'xsh': { 'raw': '(min-height: 600px)' },
      'sh': { 'raw': '(min-height: 700px)' },
      'mdh': { 'raw': '(min-height: 900px)' },
      'lgh': { 'raw': '(min-height: 1050px)' },
      
    },
    extend: {
     
    },
  },
  plugins: [],
};
