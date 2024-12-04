/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    
    
  theme: {
  	extend: {
  		
  		colors: {
        'bg-form':'#F4F4F6',
        'bg-gray':'#D1D5DB',
        'bg-primary':'#4A40BF',
        'bg-gray-deep':'#C4D2DF',
        'text-dark':'#111A24',
        'text-gray':'#6C7E8E'
      },
      fontFamily: {
      productSans: ["product_sans", "sans-serif"],
      },
      screens: {
        sm: { min: "360px", max: "767px" },
        lg: { min: "768px", max: "1022px" },
        xl: { min: "1023px" },
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
