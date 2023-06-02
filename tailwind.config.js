/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "accent-color": "#00B0FF",
        "bg-color": "#fff",
        "neutral-color": "#333",
        "linear-gray": "#f0f0f0",
        "bg-opacity": "#000000BF",
        "primary-color": "#3C5C75",
        "bg-dark": "#121212",
        "extra-gray": "#6C757D",
      },
      backgroundImage: {
        "hero-img":
          "url(https://res.cloudinary.com/dokbqdk6g/image/upload/v1685644290/josuecuevas-com/images/hero-image_gvtzcu_arfi1x.webp)",
      },
    },
  },
  plugins: [],
});
