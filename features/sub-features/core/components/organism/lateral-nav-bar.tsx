import * as React from "react";
import NavSection from "../molecule/nav-sections";
import {menuSection, negociationSection, alertSection} from "../../utils/constants/nav-section";
import {Button} from "@/features/components/ui/button";
import {Plus} from "lucide-react";
import TitleSection from "../molecule/title-section";
import DropdownMenuSections from "../molecule/dropdown-menu-sections";
import {useTranslations} from "next-intl";

export default function LateralNavBar() {
  const t = useTranslations("CoreMessages");
  return (
    <>
      <div className="flex h-full w-[331px] flex-col gap-5 bg-white">
        <section className="scrollbar-none scrollbar flex h-full w-full flex-col items-center gap-2 overflow-y-auto rounded-[8px] bg-[var(--surface)] p-7 shadow-md">
          <Button
            variant="secondary"
            className="m-4 w-full cursor-pointer rounded-[42px] text-white uppercase hover:bg-[var(--secondary)]"
          >
            <Plus /> {t("CreateArea")}
          </Button>
          <section className="flex w-full flex-col gap-4">
            {menuSection.map(({Icon, title}) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
            <DropdownMenuSections />
          </section>

          <div className="m-2 mt-2 w-full border border-[var(--outline)]" />

          <section className="flex w-full flex-col gap-4">
            <TitleSection title="Negociación" />
            {negociationSection.map(({Icon, title}) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
          </section>

          <div className="m-2 mt-2 w-full border border-[var(--outline)]" />

          <section className="flex w-full flex-col gap-4">
            <TitleSection title="Alertas" />
            {alertSection.map(({Icon, title}) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
          </section>
        </section>
      </div>
    </>
  );
}
