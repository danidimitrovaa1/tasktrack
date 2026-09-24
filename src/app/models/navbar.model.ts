import { IconType } from './icon.model';

export interface NavItem {
  icon: IconType;
  label: string;
  route?: string;
  subItems?: { icon: IconType; label: string; route: string }[];
}
