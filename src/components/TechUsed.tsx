"use client";

import React, { useState, ChangeEvent } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type Tag = {
  value: string;
  label: string;
};

type TechUsedProps = {
  tags: Tag[];
  setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
};

const fixedTags: Tag[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "next.js", label: "Next.js" },
  { value: "node.js", label: "Node.js" },
  { value: "css", label: "CSS" },
  { value: "html", label: "HTML" },
];

const TechUsed: React.FC<TechUsedProps> = ({ tags, setTags }) => {
  const [input, setInput] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Tag[]>(fixedTags);
  const [open, setOpen] = useState<boolean>(false);

  const handleInputChange = (value: string) => {
    setInput(value);
    setSuggestions(
      fixedTags.filter((tag) =>
        tag.label.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleTagSelect = (tag: Tag) => {
    if (!tags.some((t) => t.value === tag.value)) {
      setTags([...tags, tag]);
    }
    setInput("");
    setSuggestions(fixedTags);
    setOpen(false);
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 flex flex-col gap-2">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-md px-3 py-1 flex items-center"
          >
            {tag.label}
            <button
              type="button"
              className="ml-2 text-red-600"
              onClick={() => removeTag(index)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {input ? input : "Add a tag..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput
              placeholder="Search tags..."
              value={input}
              onValueChange={handleInputChange}
            />
            <CommandList>
              <CommandEmpty>No tag found.</CommandEmpty>
              <CommandGroup>
                {suggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion.value}
                    value={suggestion.value}
                    onSelect={() => handleTagSelect(suggestion)}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        tags.some((t) => t.value === suggestion.value)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {suggestion.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TechUsed;
