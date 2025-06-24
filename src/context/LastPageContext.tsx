import React, { createContext, useContext, useEffect, useState } from "react";

export const LastPageContext = createContext<any>(null);

export const LastPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lastPage, setLastPage] = useState<number>(() => {
    const stored = localStorage.getItem("lastPage");
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("lastPage", String(lastPage));
  }, [lastPage]);

  return (
    <LastPageContext.Provider value={{ lastPage, setLastPage }}>
      {children}
    </LastPageContext.Provider>
  );
};
