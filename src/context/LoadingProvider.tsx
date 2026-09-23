"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import Loading from "../components/Loading";

interface LoadingType {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  setLoading: (percent: number) => void;
}

export const LoadingContext = createContext<LoadingType | null>(null);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  const value = {
    isLoading,
    setIsLoading,
    setLoading,
  };

  useEffect(() => {
    let currentPercent = 0;
    const progressInterval = setInterval(() => {
      currentPercent += Math.floor(Math.random() * 20) + 15;
      if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(progressInterval);
      }
      setLoading(currentPercent);
    }, 60);

    // Hide the loader after 2.5s even if nothing else does
    const safetyTimeout = setTimeout(() => {
      import("../components/utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
      });
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <LoadingContext.Provider value={value as LoadingType}>
      {isLoading && <Loading percent={loading} />}
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
