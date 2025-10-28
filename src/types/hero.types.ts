import { ReactNode } from "react";

export interface HeroProps {
  badge?: {
    text: string;
    icon?: ReactNode;
  };
  title: string | ReactNode;
  description: string;
  primaryButton?: {
    text: string;
    onClick?: () => void;
    icon?: ReactNode;
  };
  secondaryButton?: {
    text: string;
    onClick?: () => void;
  };
  stats?: Array<{ value: string; label: string }>;
  image?: string;
  floatingCards?: Array<{
    icon: ReactNode;
    title: string;
    subtitle: string;
    position: string;
  }>;
}
