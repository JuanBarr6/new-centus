"use client";
import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {ChevronDown, Users} from "lucide-react";
import {DropdownSection} from "../../utils/constants/nav-section";
import {useTranslations} from "next-intl";

const DropdownMenuSections = () => {
  const t = useTranslations("CoreMessages");
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      <Accordion.Item value="usuarios">
        {/* <Accordion.Trigger
          className={`data-[state=open]:border-primary flex w-full items-center justify-between rounded-md border border-transparent bg-[var(--surface)] p-2 hover:bg-gray-200 data-[state=open]:bg-gray-200`}
        >
          <div className="text-font-title flex flex-row gap-3 font-medium">
            <Users className="text-primary" />
            {t("User")}
          </div>
          <ChevronDown className="text-primary transition-transform data-[state=open]:rotate-180" />
        </Accordion.Trigger> */}
        <Accordion.Trigger
          className={`relative flex w-full items-center justify-between rounded-md bg-[var(--surface)] p-[2px] hover:bg-gray-200 data-[state=open]:bg-gray-200 data-[state=open]:bg-gradient-to-r data-[state=open]:from-[#4919AB] data-[state=open]:to-[#CF34AA]`}
        >
          {/* Capa interna (fondo real) */}
          <span className="flex w-full items-center justify-between rounded-md bg-[var(--surface)] p-2">
            <div className="text-font-title flex flex-row gap-3 font-medium">
              <Users className="text-primary" />
              {t("User")}
            </div>
            <ChevronDown className="text-primary transition-transform data-[state=open]:rotate-180" />
          </span>
        </Accordion.Trigger>

        <Accordion.Content className="mt-2 flex flex-col gap-2 px-3">
          {DropdownSection.map(({Icon, title, value}) => (
            <button
              key={value}
              className="text-font-title flex items-center gap-2 rounded-md p-2 hover:bg-gray-200"
            >
              <Icon className="text-primary h-4 w-4" />
              {title}
            </button>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default DropdownMenuSections;
