import {
  Stethoscope,
  BedDouble,
  Scissors,
  Flower2,
  ShieldCheck,
  Layers,
  BadgeCheck,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/** Central registry mapping data-driven icon keys (site-config.ts) to Lucide components. */
export const iconMap = {
  stethoscope: Stethoscope,
  "bed-double": BedDouble,
  scissors: Scissors,
  "flower-2": Flower2,
  "shield-check": ShieldCheck,
  layers: Layers,
  "badge-check": BadgeCheck,
  "user-round": UserRound,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof iconMap;

export function DynamicIcon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
