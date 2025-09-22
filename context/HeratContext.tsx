"use client";
import { IQuestion } from "@/constants/types";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IHerat {
  heratResult: any;
  setHeratResult: React.Dispatch<React.SetStateAction<any>>;
}

export interface IHeratResultType {
  section: string;
  totalScore: number;
}

const resultData: IHeratResultType[] = [
  { section: "section 1", totalScore: 0 },
  { section: "section 2", totalScore: 0 },
  { section: "section 3", totalScore: 0 },
];
const LOCAL_STORAGE_KEY = "questionResult";

const HeratContext = createContext<IHerat | undefined>(undefined);

export const HeratProvider = ({ children }: { children: React.ReactNode }) => {
  const [heratResult, setHeratResult] = useState<IHeratResultType[]>([]);

  useEffect(() => {
    if (typeof window !== undefined) {
      const storedResult = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedResult) {
        return setHeratResult(JSON.parse(storedResult));
      }
    } else return setHeratResult(resultData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(heratResult));
  }, [heratResult]);

  return (
    <HeratContext.Provider value={{ heratResult, setHeratResult }}>
      {children}
    </HeratContext.Provider>
  );
};

export const useHerat = () => {
  const context = useContext(HeratContext);
  if (!context) {
    throw new Error("useHerat must be used within the HeratProvider");
  }
  return context;
};
