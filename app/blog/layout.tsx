"use client";

import Header from "@/components/header";
import ResourceSideBar from "@/domain/resources/sidebar";
import Pagination from "@/components/pagination";
import { usePathname } from "next/navigation";
import aboutImg from "@/public/images/help_station_about.svg";
import MainLayout from "@/components/layout/MainLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="w-full h-full">
        <MainLayout>
          <main className="w-full flex-col gap-7 flex justify-center items-center">
            <section className="w-full">
              <Header aboutImg={aboutImg}>
                <div className="z-10 w-full text-white text-center flex justify-center items-center flex-col gap-2 md:gap-3 ">
                  <div className="flex justify-center items-center flex-col w-[80%]">
                    <p className="text-base">Resources</p>
                    <h2 className="pb-3 md:pb-0 leading-10 font-bold md:text-6xl text-[36px] md:leading-[80px]">
                      Articles and Resources
                    </h2>
                    <div className="flex text-center flex-col gap-3">
                      <p className="font-normal md:text-[16px] leading-6 md:px-6">
                        Tool and strategies modern teams need to help their
                        companies grow.
                      </p>
                    </div>
                  </div>
                </div>
              </Header>
            </section>

            <section className="lg:w-[85%] w-[90%] flex flex-col md:flex-row gap-10">
              <div className="md:w-[30%]">
                <ResourceSideBar />
              </div>
              <div className="md:w-[70%] w-full">{children}</div>
            </section>

            {pathname === "/blog" && (
              <section className="lg:w-[85%] w-[90%] flex md:justify-between flex-col md:flex-row gap-20 lg:gap-28 items-center">
                <Pagination />
              </section>
            )}
          </main>
        </MainLayout>
      </body>
    </html>
  );
}
