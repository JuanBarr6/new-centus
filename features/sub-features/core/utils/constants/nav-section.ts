import {
  Wrench,
  Boxes,
  UserRoundCheck,
  MessageSquareCode,
  Bell,
  GitFork,
  Users,
  UserRoundCog,
} from "lucide-react";

export const menuSection = [
  {
    Icon: Wrench,
    title: "Settings",
  },
  {
    Icon: Boxes,
    title: "Modules",
  },
];
export const negociationSection = [
  {
    Icon: UserRoundCheck,
    title: "Negotiations",
  },
  {
    Icon: MessageSquareCode,
    title: "Integrations",
  },
];
export const alertSection = [
  {
    Icon: Bell,
    title: "Notifications",
  },
];

export const DropdownSection = [
  {
    Icon: GitFork,
    title: "Areas",
    value: "areas",
  },
  {
    Icon: UserRoundCog,
    title: "Roles",
    value: "roles",
  },
  {
    Icon: Users,
    title: "Managers",
    value: "gestores",
  },
];
