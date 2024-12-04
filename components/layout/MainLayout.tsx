"use client";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen w-full ">
    <Header />
    <main className="flex-grow max-w-full md:mt-[150px] mt-[120px]">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
