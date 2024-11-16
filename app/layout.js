import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { Passion_One, Urbanist } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const passion_one = Passion_One({
  subsets: ["latin"],
  variable: "--font-passion-one",
  weight: ["400", "700", "900"],
});
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Decentralized Platform",
  description: "Decentralized Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head />
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-secondary-950 font-sans antialiased",
          fontSans.variable,
          passion_one.variable,
          urbanist.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
