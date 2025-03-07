import React, { createContext, useContext, useEffect, useState } from "react";

export const LastPageContext = createContext<any>(null);

export const LastPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lastPage, setLastPage] = useState<number>(0);

  useEffect(() => {
    console.log("LastPageProvider -> lastPage", lastPage);
  }, [lastPage]);

  return (
    <LastPageContext.Provider value={{ lastPage, setLastPage }}>
      {children}
    </LastPageContext.Provider>
  );
};
