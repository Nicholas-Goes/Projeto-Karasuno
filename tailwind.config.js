module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-banner.png')",
        'team-pattern': "url('/team-banner.png')",
      }
    },
  },
  plugins: [

  ],
}
