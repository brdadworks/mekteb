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

/*
LocalStorage için
import React, { createContext, useEffect, useState } from "react";

export const LastPageContext = createContext<any>(null);

export const LastPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Başlangıçta localStorage'dan oku
  const [lastPage, setLastPageState] = useState<number>(() => {
    const stored = localStorage.getItem("lastPage");
    return stored ? Number(stored) : 0;
  });

  // Her değişimde localStorage'a yaz
  useEffect(() => {
    localStorage.setItem("lastPage", String(lastPage));
  }, [lastPage]);

  // set fonksiyonunu güncelle
  const setLastPage = (page: number) => {
    setLastPageState(page);
  };

  return (
    <LastPageContext.Provider value={{ lastPage, setLastPage }}>
      {children}
    </LastPageContext.Provider>
  );
}; */
