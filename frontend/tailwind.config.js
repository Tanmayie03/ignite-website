/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        rampart: ["Rampart One", "sans-serif"],
      },
      backgroundImage: {
        "event-backdrop":
          "url('https://res.cloudinary.com/dthrgos9e/image/upload/v1705476164/ignite-assets/evlbohl2mrkj6gnn6nxa')",
        "event-banner":
          "url('https://res.cloudinary.com/dy7zpv1ij/image/upload/v1728992632/Group_3473_2_1_new_uxmhmw.png')",
        "winner-banner":
          "url('https://res.cloudinary.com/dy7zpv1ij/image/upload/v1710523938/Rectangle_50_d3izjf.png')",
      },
      colors: {
        primary: "#ff6246",
        background: "#fff4f0",
      },
    },
  },
  plugins: [],
};
