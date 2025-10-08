import {Button} from "@/features/components/ui/button";
import {Label} from "@/features/components/ui/label";
import {Popover, PopoverContent, PopoverTrigger} from "@/features/components/ui/popover";
import {Switch} from "@/features/components/ui/switch";
import {Bell} from "lucide-react";
import {useTranslations} from "next-intl";
import {ReactNode} from "react";

interface HeaderCoreProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function HeaderCore({title, description, actions}: HeaderCoreProps) {
  const t = useTranslations("CoreMessages");
  return (
    <header
      className="flex w-full flex-1 items-center justify-between rounded-lg p-4 text-white shadow-md"
      style={{
        backgroundImage: "url('/HeaderCore.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-xl font-semibold">{title}</h1>
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">{t("Animations")}</Label>
          <Switch
            id="airplane-mode"
            className="cursor-pointer data-[state=checked]:bg-[var(--color-m3-dark-primary)] data-[state=unchecked]:bg-gray-300 [&>span]:data-[state=checked]:bg-[var(--color-sys-dark-on-primary)]"
          />
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="cursor-pointer rounded-full bg-white/20 p-2 hover:bg-white/30">
              <Bell size={18} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-70 max-w-sm" align="end" side="bottom">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">{t("Notifications")}</h4>
                <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">{t("Notifications")}1</Label>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">{t("Notifications")}2</Label>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">{t("Notifications")}3</Label>
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">{t("Notifications")}4</Label>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">L1</div>
      </div>
    </header>
  );
}
