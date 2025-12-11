import "./globals.css";
import "./globals.css";
import { Cormorant, Cormorant_Infant, Cormorant_SC } from "next/font/google";

const cor = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

const corInfant = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-infant",
});

const corSC = Cormorant_SC({
 weight : ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-sc",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* include both so the CSS variables are available site-wide */}
      <body className={`${cor.className} ${corInfant.variable} ${corSC.variable}`}>
        {children}
      </body>
    </html>
  );
}
