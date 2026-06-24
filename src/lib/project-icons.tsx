import {
  Car,
  CloudSun,
  Code2,
  CreditCard,
  Gamepad2,
  Globe,
  Hotel,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  ShoppingCart,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

export const projectIconMap: Record<string, LucideIcon> = {
  "layout-dashboard": LayoutDashboard,
  car: Car,
  hotel: Hotel,
  video: Video,
  users: Users,
  "credit-card": CreditCard,
  "shopping-cart": ShoppingCart,
  "cloud-sun": CloudSun,
  gamepad: Gamepad2,
  globe: Globe,
  lightbulb: Lightbulb,
  "list-checks": ListChecks,
  code: Code2,
};

export function getProjectIcon(icon: string): LucideIcon {
  return projectIconMap[icon] ?? Code2;
}
