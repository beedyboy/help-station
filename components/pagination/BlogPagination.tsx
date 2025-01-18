"use client";
import { useBlog } from "@/context/BlogContext";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const BlogPagination = ({ totalPosts }: { totalPosts: number }) => {
  const { page, limit, handlePage } = useBlog();
  const totalPages = Math.ceil(totalPosts / limit);

  // Function to generate pagination numbers
  const getPaginationNumbers = () => {
    const range = 10; // Maximum number of page buttons to display
    const halfRange = Math.floor(range / 2);

    let start = Math.max(1, page - halfRange); // Start of pagination range
    const end = Math.min(totalPages, start + range - 1); // End of pagination range

    // Adjust start if end is less than the desired range
    if (end - start + 1 < range) {
      start = Math.max(1, end - range + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const [paginationNumbers, setPaginationNumbers] = useState(getPaginationNumbers);

  useEffect(() => {
    setPaginationNumbers(getPaginationNumbers());
  }, [page, totalPages]);

  const handlePrevious = () => {
    if (page > 1) {
      handlePage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      handlePage(page + 1);
    }
  };

  return (
    <div className="flex justify-between w-full items-center py-5">
      {/* Previous Button */}
      <div
        onClick={handlePrevious}
        className={`hidden md:flex gap-3 items-center border-[1px] border-neutral-3 rounded-lg p-2 ${
          page > 1 ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        }`}
      >
        <FaArrowLeft />
        <p>Previous</p>
      </div>

      {/* Pagination Numbers */}
      <div className="flex items-center">
        {paginationNumbers.map((index) => (
          <p
            key={index}
            onClick={() => handlePage(index)}
            className={`rounded-lg p-2 px-6 ${
              index === page
                ? "bg-[#D9EFE5] text-primary-4"
                : "text-neutral-3 cursor-pointer"
            } text-center font-semibold`}
          >
            {index}
          </p>
        ))}
      </div>

      {/* Next Button */}
      <div
        onClick={handleNext}
        className={`hidden md:flex px-4 gap-3 items-center border-[1px] border-neutral-3 rounded-lg p-2 ${
          page < totalPages ? "cursor-pointer" : "cursor-not-allowed opacity-50"
        }`}
      >
        <p>Next</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default BlogPagination;
