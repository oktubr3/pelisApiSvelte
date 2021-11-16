const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],

  variants: {
    extend: {
      translate: ['group-hover'],
    }
  }
};

module.exports = config;
