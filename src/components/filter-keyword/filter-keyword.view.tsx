"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Search, X } from "lucide-react";

interface FilterKeywordProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  palavraChave?: string | null;
  setPalavraChave: (value: string | null) => void;
  clear?: boolean;
  placeholder?: string;
}

export const FilterKeywordView: React.FC<FilterKeywordProps> = ({
  variant = "outline",
  palavraChave,
  setPalavraChave,
  className = "",
  clear = true,
  placeholder = "Digite o nome do restaurante ou um prato",
}) => {
  const [inputValue, setInputValue] = useState(palavraChave || "");

  const clearInput = () => {
    setInputValue("");
    setPalavraChave(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    setPalavraChave(inputValue.trim());
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-white text-black stroke-black";
      case "secondary":
        return "bg-[#F0F5FA] text-[#798AA3] stroke-[#798AA3]";
      case "outline":
      default:
        return "rounded-md border border-slate-200 bg-white text-sm placeholder:text-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";
    }
  };

  return (
    <form
      className={cn(
        "w-full h-10 px-3 py-2 rounded-md flex space-x-2",
        getVariantClasses(),
        className
      )}
      onSubmit={handleSubmit}
    >
      <button type="submit">
        <span className="sr-only">Buscar</span>
        <Search className="w-5 h-5" />
      </button>

      <div className="relative w-full flex items-center">
        <input
          className={cn(
            "w-full h-full bg-transparent outline-none font-normal text-base",
            variant === "outline" ? "py-[2.5px] placeholder:text-[#C5D2E0]" : "py-1 placeholder:text-gray-500"
          )}
          enterKeyHint="search"
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ fontSize: "16px" }}
        />

        {inputValue && clear && (
          <button
            type="button"
            className="absolute right-0"
            onClick={clearInput}
          >
            <X size={20} className="text-[#798AA3]" />
          </button>
        )}
      </div>
    </form>
  );
};
