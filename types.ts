import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  requirements: string[];
}

export interface NavItem {
  label: string;
  href: string;
}