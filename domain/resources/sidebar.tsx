"use client";
import { useEffect, useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { getCategories } from "@/lib/blog";
import { useBlog } from "@/context/BlogContext";

const ResourceSideBar = () => {
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  ); 
  const { category, handleCategory, query, handleQuery } = useBlog();

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <div className="w-full p-2 flex flex-col gap-6">
      {/* Search Input */}
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

      {/* Categories */}
      <div className="flex gap-6 flex-col">
        <h3 className="text-lg font-bold text-primary-4">Categories</h3>
        <div className="flex flex-col ">
          {/* Static Item for "View All" */}
          <div
             onClick={() => handleCategory("View all")}
            className={`${
              category === "View all"
                ? "bg-[#D9EFE5] text-primary-4 font-semibold"
                : "text-[#797B89]"
            } p-3 text-lg rounded-lg`}
          >
            <p>View all</p>
          </div>

          {/* Dynamically Render Categories */}
          {categories.map((categoryItem) => (
            <div
            onClick={() => handleCategory(categoryItem.name)}
              key={categoryItem.id}
              className={`${
                category === categoryItem.name
                  ? "bg-[#D9EFE5] text-primary-4 font-semibold"
                  : "text-[#797B89]"
              } p-3 text-lg rounded-lg`}
            >
              <p>{categoryItem.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceSideBar;
