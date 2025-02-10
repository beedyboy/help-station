"use client";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isFooterActive = pathname.includes("form");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full ">
      <Header />
      <main className="flex-grow w-[100%] md:mt-[100px] mt-[80px]">
        {children}
      </main>
      {isFooterActive ? null : <Footer />}
    </div>
  );
};

export default MainLayout;
