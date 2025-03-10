import type { Metadata } from "next";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Help-station",
  description:
    "We connect patients with the nearest and available ambulances at affordable price options. We also provide health facility navigation support.",
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
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <a
            href="tel:+2349132000013"
            className="flex justify-center items-center w-14 h-14 rounded-full bg-[#3BAD6B] shadow-lg hover:bg-[#2e9458] transition"
          >
            <Image
              src="icons/call_icon.svg"
              alt="Call Icon"
              width={32}
              height={32}
            />
          </a>
        </div>
      </body>
    </html>
  );
}
