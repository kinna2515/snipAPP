"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { use, useEffect, useState } from "react";
import {ThemeContext} from "@/components/themeContext";
import { useContext } from "react";

export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const themes = useContext(ThemeContext);

  return (
   
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
        <ThemeContext.Provider value={themes}>
          {children}
          </ThemeContext.Provider>
        </NextThemesProvider>
      </NextUIProvider>
   
  );
}

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [themes, setThemes] = useState("vs-light");

  const toggleTheme = () => {
    setThemes((prevTheme) =>
      prevTheme === "vs-light" ? "vs-dark" : "vs-light"
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = [
    {
      key: "light",
      label: "Light Theme",
    },
    {
      key: "dark",
      label: "Dark Theme",
    },
  ];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Mode: {theme}</Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        <DropdownItem
          onClick={() => {
            setTheme("light");
            toggleTheme();
          }}
        >
          Light Mode
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            setTheme("dark");
            toggleTheme();
          }}
        >
          Dark Mode
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  /*  <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  */
}
