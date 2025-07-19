"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export type Options = {
  value: string;
  label: string;
};

interface BaseSearchSelectProps {
  label: string;
  title?: string;
  labelNotSearching?: string;
  options: Options[];
  placeholder: string;
  className?: string;
  onInputChange?: (inputValue: string) => void;
  onChange: (value: Options | null) => void;
  defaultValue?: string;
  isLoading?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: Options | null | any;
}

export const BaseSearchSelectView = ({
  label,
  labelNotSearching = "Não encontramos nenhum resultado.",
  placeholder,
  options,
  onInputChange,
  onChange,
  value,
  defaultValue,
  className,
  isLoading,
  title,
  ...props
}: BaseSearchSelectProps) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = React.useState<Options | null>(
    null
  );
  const [inputValue, setInputValue] = React.useState<string>("");
  const clickRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        clickRef.current &&
        !clickRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (defaultValue) {
      setSelectedOptions(
        options.find((option) => option.value === defaultValue) || {
          label: defaultValue,
          value: defaultValue,
        }
      );
    }
  }, [defaultValue, options]);

  React.useEffect(() => {
    if (value) {
      setInputValue(value.label);
      setSelectedOptions(value);
    }
  }, [value]);

  const clearInput = () => {
    setInputValue("");
    setOpen(true);
    setSelectedOptions(null);
    if (onInputChange) {
      onInputChange("");
    }
    onChange(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  const handleSelectOption = (value: string) => {
    const selected = options.find((option) => option.value === value) || {
      label: value,
      value: value,
    };
    setSelectedOptions(selected);
    setInputValue(selected?.label || "");
    onChange(selected);
    setOpen(false);
  };

  const handleOpenPopup = () => {
    setOpen(!open);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && options.length > 0) {
      const firstOption = options[0];
      handleSelectOption(firstOption.value);
    }
  };

  return (
    <div className="relative" ref={clickRef}>
      <div className="flex flex-col">
        {title && (
          <label
            htmlFor={title}
            className="text-sm leading-6 font-medium text-[#798AA3] mb-1"
          >
            {title}
          </label>
        )}

        <Button
          onClick={handleOpenPopup}
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full items-center justify-between whitespace-nowrap h-10",
            className
          )}
        >
          {selectedOptions ? (
            <span className="text-sm leading-6 font-normal text-black truncate">
              {selectedOptions.label}
            </span>
          ) : (
            <>
              <span className="text-sm leading-6 font-normal text-muted-foreground">
                {label}
              </span>
              {open ? (
                <ChevronUp className="text-[#798AA3] h-4 w-4" />
              ) : (
                <ChevronDown className="text-[#798AA3] h-4 w-4" />
              )}
            </>
          )}
        </Button>

        {selectedOptions && (
          <button
            className="bg-white rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-1"
            onClick={clearInput}
          >
            <X size={18} className="text-[#475366]" />
          </button>
        )}
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="p-0 min-w-52 md:w-full absolute border border-slate-200 bg-white rounded-md mt-1 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Command>
              <Input
                {...props}
                placeholder={
                  label?.charAt(0)?.toUpperCase() +
                  label?.slice(1)?.toLowerCase()
                }
                value={inputValue}
                onInput={handleInputChange}
                onKeyDown={handleKeyDown}
                className="border-0"
              />

              <Separator />
              <CommandList>
                {isLoading ? (
                  <CommandEmpty className="flex flex-col space-y-3 py-4 mx-2">
                    {Array.from({ length: 10 }).map((_, index) => (
                      <Skeleton key={index} className="roundend-md h-9 px-3" />
                    ))}
                  </CommandEmpty>
                ) : (
                  <>
                    <CommandEmpty className="text-sm leading-6 font-normal text-[#475366] p-4">
                      {labelNotSearching}
                    </CommandEmpty>
                    <ScrollArea className="[&>[data-radix-scroll-area-viewport]]:max-h-[300px]">
                      <CommandGroup>
                        {options.map((status) => (
                          <CommandItem
                            key={status.value}
                            value={status.value}
                            className="cursor-pointer text-sm leading-6 font-medium text-[#798AA3]"
                            onSelect={handleSelectOption}
                          >
                            <span>{status.label}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </ScrollArea>
                  </>
                )}
              </CommandList>
            </Command>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
