import { themeContextInterFace } from "@/components/utils/interfaces";
import { themeModeType } from "@/components/utils/types";
import { createContext, useState, ReactNode } from "react";

const defaultThemeState = {
  themeMode: "light",
  setThemeMode: () => {},
} as themeContextInterFace;

export const themeContext = createContext(defaultThemeState);

type themeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: themeProviderProps) {
  const [themeMode, setThemeMode] = useState<themeModeType>("light");

  return (
    <themeContext.Provider value={{ themeMode, setThemeMode }}>{children}</themeContext.Provider>
  );
}
