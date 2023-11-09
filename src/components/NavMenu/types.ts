import { ReactNode } from 'react';

export type NavMenuProps = {
  items: NavItem[];
}

type NavItem = {
  text: string;
  icon?: ReactNode;
}
