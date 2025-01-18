"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface BlogContextType {
  page: number;
  limit: number;
  query: string;
  category: string;
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePage: (value: number) => void;
  handleLimit: (value: number) => void;
  handleCategory: (category: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("View all");

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handlePage = (value: number) => {
    setPage(value);
  };

  const handleLimit = (value: number) => {
    setLimit(value);
  };

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <BlogContext.Provider value={{ page, query, category, limit, handleQuery, handlePage, handleLimit, handleCategory }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
