import React from "react";

export default function CorePage() {
  return (
    <div className="scrollbar-none scrollbar h-full w-full flex-col space-y-4 overflow-x-auto overflow-y-auto rounded-2xl border border-gray-200 bg-[var(--background)] p-4">
      Core Page
      {[...Array(24)].map((_, i) => (
        <div key={i} className="text-primary-foreground h-[200px] w-[200px] bg-[#34367f]">
          {i}
        </div>
      ))}
    </div>
  );
}
