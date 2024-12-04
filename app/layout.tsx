import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Help-station",
  description: "We connect patients with the nearest and available ambulances at affordable price options. We also provide health facility navigation support.",
};


  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <body className="flex w-full h-full">
        {children}
      </body>
    </html>
  );
}
