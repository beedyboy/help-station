import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { Source_Sans_3 } from 'next/font/google';

// Configure Source Sans 3
const sourceSans3 = Source_Sans_3({
  subsets: ['latin'], 
  weight: ['400', '600', '700'], 
  display: 'swap', 
});


export const metadata: Metadata = {
  title: "Help-station",
  description: "We connect patients with the nearest and available ambulances at affordable price options. We also provide health facility navigation support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center w-full h-full">
        <div className="w-full">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
