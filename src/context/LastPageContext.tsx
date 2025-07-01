import React, { createContext, useContext, useEffect, useState } from "react";
import storageService from "../../utils/storageService";

interface LastPageContextType {
  lastPage: number;
  setLastPage: (page: number) => void;
  isLoaded: boolean;
}

export const LastPageContext = createContext<LastPageContextType | null>(null);

export const useLastPage = () => {
  const context = useContext(LastPageContext);
  if (!context) {
    throw new Error("useLastPage must be used within a LastPageProvider");
  }
  return context;
};

export const LastPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lastPage, setLastPage] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Debug function for manual testing
  useEffect(() => {
    // Add debug functions to window for manual testing
    (window as any).debugStorage = {
      async testSave(value: number) {
        console.log("Debug -> testing save:", value);
        await storageService.setData("lastReadPage", value);
        const readBack = await storageService.getData<number>("lastReadPage");
        console.log("Debug -> read back:", readBack);
      },
      async testRead() {
        const value = await storageService.getData<number>("lastReadPage");
        console.log("Debug -> current storage value:", value);
        return value;
      },
      async clearStorage() {
        await storageService.removeData("lastReadPage");
        console.log("Debug -> storage cleared");
      },
      getCurrentState() {
        console.log("Debug -> current context state:", { lastPage, isLoaded });
        return { lastPage, isLoaded };
      }
    };

    console.log("Debug functions added to window.debugStorage");
  }, [lastPage, isLoaded]);

  useEffect(() => {
    const loadLastPage = async () => {
      console.log("LastPageProvider -> starting to load last page");
      try {
        const savedLastPage = await storageService.getData<number>("lastReadPage");
        console.log("LastPageProvider -> savedLastPage raw value:", savedLastPage, typeof savedLastPage);
        
        if (savedLastPage !== null && savedLastPage !== undefined && !isNaN(savedLastPage)) {
          setLastPage(savedLastPage);
          console.log("LastPageProvider -> successfully loaded from storage:", savedLastPage);
        } else {
          console.log("LastPageProvider -> no valid saved page found, using default: 0");
          setLastPage(0);
        }
      } catch (error) {
        console.error("LastPageProvider -> error loading last page:", error);
        setLastPage(0); // Fallback to default
      } finally {
        setIsLoaded(true);
        console.log("LastPageProvider -> loading completed, isLoaded set to true");
      }
    };

    loadLastPage();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const saveLastPage = async () => {
        console.log(`LastPageProvider -> attempting to save page: ${lastPage} (isLoaded: ${isLoaded})`);
        try {
          await storageService.setData("lastReadPage", lastPage);
          console.log("LastPageProvider -> successfully saved to storage:", lastPage);
          
          // Verify the save by reading it back
          const verification = await storageService.getData<number>("lastReadPage");
          console.log("LastPageProvider -> verification read:", verification);
        } catch (error) {
          console.error("LastPageProvider -> error saving last page:", error);
        }
      };

      saveLastPage();
    }
  }, [lastPage, isLoaded]);

  return (
    <LastPageContext.Provider value={{ lastPage, setLastPage, isLoaded }}>
      {children}
    </LastPageContext.Provider>
  );
};
