import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {Button} from "@/features/components/ui/button";
import {ChevronDown, ChevronUp, Users} from "lucide-react";
import {DropdownSection} from "../../utils/constants/nav-section";

const DropdownMenuSections = () => {
  const [position, setPosition] = React.useState("bottom");
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-full justify-between bg-[var(--color-on-surface)] hover:bg-gray-200">
            {" "}
            <div className="flex flex-row gap-3">
              <Users /> Usuarios
            </div>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[var(--color-on-surface)] text-black hover:bg-gray-200">
          <DropdownMenuLabel></DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            {DropdownSection.map(({Icon, title, value}) => (
              <DropdownMenuRadioItem key={value} value={value}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {title}
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DropdownMenuSections;
