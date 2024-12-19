"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IResource {
  page: number;
  query: string;
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePage: (value: number) => void;
}
const ResourecContext = createContext<IResource | undefined>(undefined);

export const ResourceProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handlePage = (value: number) => setPage(value);
  return (
    <ResourecContext.Provider value={{ page, query, handleQuery, handlePage }}>
      {children}
    </ResourecContext.Provider>
  );
};

export const useResource = () => {
  const context = useContext(ResourecContext);
  if (!context) {
    throw new Error("useResource must be used within a ResourceContext");
  }
  return context;
};
