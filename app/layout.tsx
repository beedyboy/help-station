import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";


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
      <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
