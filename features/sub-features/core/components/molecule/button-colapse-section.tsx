import {Button} from "@/features/components/ui/button";
import {ArrowLeft} from "lucide-react";
import React from "react";

export function ButtonColapseSection() {
  return (
    <Button
      className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0000004D] p-0 hover:bg-[#00000080]"
      variant="default"
    >
      <ArrowLeft />
    </Button>
  );
}
