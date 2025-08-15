import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = () => {
      if (theme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        root.classList.toggle("dark", prefersDark);
      } else {
        root.classList.toggle("dark", theme === "dark");
      }
    };

    applyTheme();

    if (theme === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = () => applyTheme();
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }
  }, [theme]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTheme(value);
    localStorage.setItem("theme", value);
  };

  return (
    <select
      value={theme}
      onChange={handleChange}
      className="border px-2 py-1 rounded font-archia text-stratos-blue dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}

export default ThemeSelector;
