"use client";
import { useResource } from "@/context/ResourceContext";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = () => {
  const { page, handlePage } = useResource();
  const [paginationNumber, setPaginationNumber] = useState(
    Array.from({ length: 10 }, (_: undefined, i: number) => page + i)
  );

  const middleIndex = Math.floor(paginationNumber.length / 2);
  useEffect(() => {
    setPaginationNumber(
      Array.from({ length: 10 }, (_: undefined, i: number) => page + i)
    );
  }, [page]);

  const handlePrevious = () => {
    if (page <= 1) {
      return;
    }
    handlePage(page - 1);
  };

  const handleNext = () => {
    // Check the number of blog data fetched divided by the number fetched per page
    handlePage(page + 1);
  };
  return (
    <div className="flex justify-between w-full items-center py-5">
      <div
        onClick={handlePrevious}
        className=" hidden md:flex  gap-3 items-center border-[1px] border-neutral-3 rounded-lg p-2 "
      >
        <FaArrowLeft /> <p>Previous</p>
      </div>
      <div className=" flex items-center ">
        {paginationNumber.map((index, i) => {
          return i === middleIndex ||
            i === middleIndex - 1 ||
            i === middleIndex + 1 ? (
            <p className="p-1git ">.</p>
          ) : (
            <p
              onClick={() => handlePage(index)}
              key={i}
              className={`rounded-lg  p-2 px-6 ${
                index === page
                  ? "bg-[#D9EFE5] text-primary-4 "
                  : " text-neutral-3"
              }  text-center font-semibold `}
            >
              {index}
            </p>
          );
        })}
      </div>
      <div
        onClick={handleNext}
        className=" hidden md:flex px-4  gap-3 items-center border-[1px] border-neutral-3 rounded-lg p-2"
      >
        <p className="px-3">Next</p>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Pagination;
