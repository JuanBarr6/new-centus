import React from "react";

export default function Core({children}: {children: React.ReactNode}) {
  return (
    <div className="scrollbar-none scrollbar flex h-full w-full flex-col overflow-x-auto overflow-y-auto rounded-2xl border border-gray-200 bg-[var(--background)] p-4">
      Core Page
      {[...Array(24)].map((_, i) => (
        <div key={i} className="text-primary-foreground h-[200px] w-[200px] bg-[#34367f]">
          {i}
        </div>
      ))}
    </div>
  );
}
