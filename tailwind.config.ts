import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mini: "250px",
        pp: "330px",
        p: "430px",
        medium: "550px",
        "md-l": "930px",
        default: "1366px",
      },

      fontFamily: {
        poppins: ["var(--font-primary-poppins)"],
        merriweather: ["var(--font-primary-merriweather)"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
      colors: {
        background: "hsl(var(--background))",
        Copper: {
          "50": "#FAF6EC",
          "100": "#F3E8CE",
          "200": "#E8D0A0",
          "300": "#DAB06A",
          "400": "#CE9441",
          "500": "#B17630",
          "600": "#A4622A",
          "700": "#834925",
          "800": "#6E3C25",
          "900": "#5F3324",
          "950": "#361A12",
        },
        "cold-gray": {
          "50": "#F6F6F6",
          "100": "#E7E7E7",
          "200": "#D1D1D1",
          "300": "B0B0B0",
          "400": "#888888",
          "500": "#6D6D6D",
          "600": "#5D5D5D",
          "700": "#4F4F4F",
          "800": "#454545",
          "900": "#3D3D3D",
          "950": " #0F0F0F",
        },
        Seashell: {
          "50": "#F8F8F8",
          "100": "#F0F0F0",
          "200": "#DCDCDC",
          "300": "#BDBDBD",
          "400": "#989898",
          "500": "#7C7C7C",
          "600": "#656565",
          "700": "#525252",
          "800": "#464646",
          "900": "#3D3D3D",
          "950": "#292929",
        },

        Sandstone: {
          "50": "#F4F3F2",
          "100": "#E3E1DE",
          "200": "#C9C5BF",
          "300": "#AAA39A",
          "400": "#92887D",
          "500": "#80756C",
          "600": "#70645E",
          "700": "#5B514D",
          "800": "#4F4744",
          "900": "#463E3D",
          "950": "#272221",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
