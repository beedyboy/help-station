import React, { createContext, useContext, useState } from "react";

interface SubscriptionContextProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const SubscriptionContext = createContext<SubscriptionContextProps | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SubscriptionContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) {
    throw new Error("useSubscription must be used within a SubscriptionProvider");
  }
  return context;
};
