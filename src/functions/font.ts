import { Poppins, Merriweather } from "next/font/google";

export const typePrimary = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary-poppins",
  display: "swap",
});

export const typeSecond = Merriweather({
  weight: ["300","400","700","900"],
  subsets: ["latin"],
  variable: "--font-primary-merriweather",
  display: "swap",
});