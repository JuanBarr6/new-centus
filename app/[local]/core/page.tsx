import {ButtonColapseSection} from "@/features/sub-features/core/components/molecule/button-colapse-section";
import HeaderCore from "@/features/sub-features/core/components/organism/header-core";
import {useTranslations} from "next-intl";
import React from "react";

export default function CorePage() {
  const t = useTranslations("CoreMessages");
  return (
    <div className="scrollbar-none scrollbar h-full w-full flex-col space-y-4 overflow-x-auto overflow-y-auto rounded-2xl bg-[var(--background)] p-4">
      <div className="flex w-full flex-row items-center gap-5">
        <div className="left-1 z-50">
          <ButtonColapseSection />
        </div>
        <div className="flex w-full flex-row items-center gap-5">
          <HeaderCore title={t("Managers")} description={t("Description")} />
        </div>
      </div>
      Core Page
      {[...Array(24)].map((_, i) => (
        <div key={i} className="text-primary-foreground h-[200px] w-[200px] bg-[#34367f]">
          {i}
        </div>
      ))}
    </div>
  );
}
