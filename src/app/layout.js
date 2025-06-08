import { Geist, Geist_Mono, Koulen, Pixelify_Sans, Roboto } from "next/font/google";
import "./globals.css";
import ClickSpark from "@/components/animation/click-spark";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Title = Koulen({
  variable: "--font-koulen",
  weight: '400', // Koulen only has one weight (400)
  subsets: ['latin', 'khmer'], // 'khmer' is important for Koulen
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

const pixelText = Pixelify_Sans({
  variable: "--font-pixel",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelText.variable} ${Title.variable} ${roboto.variable} antialiased`}
      >
        <ClickSpark
        >
          {children}
        </ClickSpark>
      </body>
    </html>
  );
}
