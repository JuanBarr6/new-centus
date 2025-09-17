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
    title: "Configuraciones",
  },
  {
    Icon: Boxes,
    title: "Modulos",
  },
];
export const negociationSection = [
  {
    Icon: UserRoundCheck,
    title: "Negociaciones",
  },
  {
    Icon: MessageSquareCode,
    title: "Integraciones",
  },
];
export const alertSection = [
  {
    Icon: Bell,
    title: "Notificaciones",
  },
];

export const DropdownSection = [
  {
    Icon: GitFork,
    title: "Áreas",
    value: "areas",
  },
  {
    Icon: UserRoundCog,
    title: "Roles",
    value: "roles",
  },
  {
    Icon: Users,
    title: "Gestores",
    value: "gestores",
  },
];
