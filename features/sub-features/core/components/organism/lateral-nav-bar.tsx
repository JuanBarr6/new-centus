"use client";
import * as React from "react";
import NavSection from "../molecule/nav-sections";
import {menuSection, negociationSection, alertSection} from "../../utils/constants/nav-section";
import {Button} from "@/features/components/ui/button";
import {Plus} from "lucide-react";
import TitleSection from "../molecule/title-section";
import DropdownMenuSections from "../molecule/dropdown-menu-sections";

export default function LateralNavBar() {
  return (
    <>
      <div className="h-full w-[331px] p-6">
        <section className="scrollbar-none scrollbar flex h-[879px] w-[295px] flex-col items-center gap-2 overflow-y-auto rounded-[8px] border border-[var(--color-sidebar-ring)] bg-[var(--color-on-surface)] p-7 shadow-md">
          <Button className="m-4 w-full cursor-pointer rounded-[42px] bg-[var(--color-secondary)] text-white uppercase hover:bg-[var(--secondary)]">
            <Plus /> crear área
          </Button>
          <section className="flex w-full flex-col gap-4">
            {menuSection.map(({Icon, title}) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
            <DropdownMenuSections />
          </section>

          <hr className="my-2 border-t border-[var(--color-sidebar-ring)]" />

          <section className="flex w-full flex-col gap-4">
            <TitleSection title="Negociación" />
            {negociationSection.map(({Icon, title}) => (
              <NavSection key={title} Icon={Icon} title={title} />
            ))}
          </section>
          <hr className="my-2 border-t border-[var(--color-sidebar-ring)]" />

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
