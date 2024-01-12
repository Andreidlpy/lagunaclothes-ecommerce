"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

const optionsFilters = ["All", "Pants", "Casaca", "Polos", "Camisas"];
const ALL_OPTION = "All";

export const ProductsFilter = () => {
  const [selectedOptions, setOptions] = useState<string[]>([ALL_OPTION]);

  const onAddOption = (selectedOption: string) => {
    const isOptionSelected = selectedOptions.includes(selectedOption);
    //When other options are not All
    //Si hago click en Pants or any other category, all option is disabled
    if (isOptionSelected) {
      setOptions((prevOption) =>
        prevOption.filter((opt) => opt !== selectedOption)
      );
    } else {
      setOptions((prevOption) => [...prevOption, selectedOption]);
    }
    if (selectedOption !== ALL_OPTION) {
      setOptions((prevOption) =>
        prevOption.filter((opt) => opt !== ALL_OPTION)
      );
    } else {
      setOptions((prevOption) =>
        prevOption.filter((opt) => opt === ALL_OPTION)
      );
    }
  };
  return (
    <div className="hidden sm:block">
      <h2 className="py-2 font-medium text-sm">
        Use tags to filter your search
      </h2>
      <div className="flex flex-wrap gap-2">
        {optionsFilters.map((option) => (
          <Badge
            variant={"outline"}
            key={option}
            className={cn(
              "px-4 py-1 font-normal text-sm border hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer",
              selectedOptions.includes(option) &&
                "bg-blue-500 text-white hover:text-white hover:bg-blue-500/90 hover:border-blue-500/90"
            )}
            onClick={() => onAddOption(option)}
          >
            {option}
          </Badge>
        ))}
      </div>
    </div>
  );
};
