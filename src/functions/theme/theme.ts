import { themeContextInterFace } from "@/components/utils/interfaces";

export function themeHandler({ setThemeMode, themeMode }: themeContextInterFace) {
  ("use client");
  if (themeMode === "dark") {
    setThemeMode("light");
    document.documentElement.classList.remove("dark");
  } else if (themeMode === "light") {
    setThemeMode("dark");
    document.documentElement.classList.add("dark");
  }
}
