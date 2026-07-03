import React, { createContext } from "react";

export const PerformanceContext = createContext(null);

export default function PerformanceProvider({ children }) {
  const value = {};

  return (
    <PerformanceContext.Provider value={value}>
      {children}
    </PerformanceContext.Provider>
  );
}