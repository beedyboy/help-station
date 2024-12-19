"use client";
import { useResource } from "@/context/ResourceContext";
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const sideItems = ["View all", "Blogs", "Report", "Press"];

const ResourceSideBar = () => {
  const [items, setItems] = useState("View all");
  const { handleQuery, query } = useResource();

  return (
    <div className="w-full p-2 flex flex-col gap-6">
      <div className="w-full relative">
        <div className="absolute left-2 top-4">
          <RiSearch2Line color="black" fill="#797B89" size={28} />
        </div>
        <input
          className="w-full outline-none border-[1px] border-[#667085]  rounded-lg placeholder:text-[#667085] text-sm md:text-base leading-6 p-[14px] px-10"
          value={query}
          onChange={handleQuery}
          placeholder="Search"
        />
      </div>

      <div className=" flex gap-6 flex-col">
        <h3 className="text-lg font-bold text-primary-4">Categories</h3>
        <div className="flex flex-col ">
          {sideItems.map((nav, i) => (
            <div
              onClick={() => setItems(nav)}
              key={i}
              className={`${
                items == nav
                  ? "bg-[#D9EFE5] text-primary-4 font-semibold "
                  : " text-[#797B89]  "
              } p-3 text-lg rounded-lg`}
            >
              <p className="">{nav}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSideBar;
