import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Palette } from "lucide-react";

const ThemeSelector = () => {
  const { setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-3 sm:bottom-4 right-3 sm:right-4 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="flex gap-2 sm:gap-1.5 p-2 sm:p-2 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-black/10">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className="h-8 w-8 sm:h-6 sm:w-6 rounded-full cursor-pointer transition-transform hover:scale-125 active:scale-95 ring-1 ring-black/10"
              style={{ backgroundColor: theme.colors.primaryColor }}
              onClick={() => {
                setTheme(theme.colors);
                setOpen(false);
              }}
              title={theme.name}
            />
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 sm:h-9 sm:w-9 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-md shadow-lg border border-black/10 hover:scale-105 active:scale-95 transition-all"
      >
        <Palette size={18} className="text-gray-700 sm:size-4" />
      </button>
    </div>
  );
};

export default ThemeSelector;