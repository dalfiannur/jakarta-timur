import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Roboto, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./components/NavigationBar";
import { Footer } from "./components/Footer";
import { Providers } from "./providers";
import { MobileNavigationBar } from "./components/MobileNavigationBar";
import { PopoverFeedback } from "./sections/PopoverFeedback";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["latin"],
});
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kota Administrasi Jakarta Timur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${roboto.variable} ${poppins.variable} ${inter.variable} bg-soft-white font-roboto antialiased`}
      >
        <Providers>
          <NavigationBar />
          <MobileNavigationBar />
          {children}
          <Footer />
          <PopoverFeedback />
        </Providers>
      </body>
    </html>
  );
}
