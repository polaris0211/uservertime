"use client";
import { darkTheme, lightTheme } from "@/css/theme.css";
import { ThemeProvider } from "next-themes";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
