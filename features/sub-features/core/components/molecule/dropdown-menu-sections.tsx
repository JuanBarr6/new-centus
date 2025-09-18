"use client";
import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDown, Users} from "lucide-react";
import {DropdownSection} from "../../utils/constants/nav-section";

const DropdownMenuSections = () => {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="usuarios">
        <Accordion.Trigger className="flex w-full items-center justify-between rounded-md bg-[var(--surface)] p-2 hover:bg-gray-200">
          <div className="flex flex-row gap-3">
            <Users /> Usuarios
          </div>
          <ChevronDown className="transition-transform data-[state=open]:rotate-180" />
        </Accordion.Trigger>

        <Accordion.Content className="mt-2 flex flex-col gap-2">
          {DropdownSection.map(({Icon, title, value}) => (
            <button
              key={value}
              className="flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <Icon className="h-4 w-4" />
              {title}
            </button>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default DropdownMenuSections;
