import {Label} from "@radix-ui/react-label";
import React from "react";

interface TitleSectionProps {
  title: string;
}
export default function TitleSection({/*Icon,*/ title}: TitleSectionProps) {
  return (
    <>
      <Label className="text-[14px] leading-[20px] font-bold tracking-[0.1px] text-[var(--color-secondary)]">
        {title}
      </Label>
    </>
  );
}
