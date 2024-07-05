"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  const [mounted, setMouted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMouted(true);
  }, []);

  const toggleMode = (mode) => {
    setTheme(mode);
  };

  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdDarkMode
          onClick={() => toggleMode("light")}
          className="text-xl cursor-pointer"
        />
      ) : (
        <MdLightMode
          onClick={() => toggleMode("dark")}
          className="text-xl cursor-pointer"
        />
      )}
    </div>
  );
}
