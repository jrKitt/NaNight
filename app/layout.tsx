import type { Metadata } from "next";
import { Mali } from 'next/font/google'
import "./globals.css";
const mali = Mali({
  subsets: ["thai", "latin"], 
  weight: ["400", "700"], 
  display: "swap",
});


export const metadata: Metadata = {
  title: "NaNight",
  description: "NaNight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="retro">
      <body
        className={`${mali.className}`}
      >
        {children}
      </body>
    </html>
  );
}
