import React from "react";
import Link from "next/link";
import {Label} from "@radix-ui/react-label";

interface NavSectionProps {
  //Icon: React.ElementType;
  title: string;
}

export default function NavSection({/*Icon,*/ title}: NavSectionProps) {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-200"
    >
      {/* <Icon className="h-5 w-5" /> */}
      <Label className="text-sm font-medium">{title}</Label>
    </Link>
  );
}
