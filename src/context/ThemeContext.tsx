/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useState } from "react";

interface Theme {
  id: string;
  name: string;
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
}

interface ThemeContextType {
  activeTheme: Theme;
  setActiveTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(
    JSON.parse(localStorage.getItem("activeTheme") || "{}") || {}
  );

  const getActiveTheme = async () => {
    try {
      const response = await fetch(
        "https://magic-group-of-companes-api.vercel.app/api/theme/get/active"
      );
      const data: Theme = await response.json();
      if (response.ok) {
        localStorage.setItem("activeTheme", JSON.stringify(data));
        setActiveTheme(data); // Update state globally
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("Error fetching theme:", error);
    }
  };

  useEffect(() => {
    getActiveTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
