import HeaderCore from "@/features/sub-features/core/components/organism/header-core";
import {Bell} from "lucide-react";
import React from "react";

export default function CorePage() {
  return (
    <div className="scrollbar-none scrollbar h-full w-full flex-col space-y-4 overflow-x-auto overflow-y-auto rounded-2xl border border-gray-200 bg-[var(--background)] p-4">
      <HeaderCore
        title="Gestores"
        description="Descripción ingresada para el módulo en módulos."
        actions={
          <>
            <button className="rounded-full bg-white/20 p-2 hover:bg-white/30">
              <Bell size={18} />
            </button>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
              L1
            </div>
          </>
        }
      />
      Core Page
      {[...Array(24)].map((_, i) => (
        <div key={i} className="text-primary-foreground h-[200px] w-[200px] bg-[#34367f]">
          {i}
        </div>
      ))}
    </div>
  );
}
