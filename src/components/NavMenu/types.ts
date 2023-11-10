import { FunctionComponent, SVGProps } from 'react';

export type NavMenuProps = {
  items: NavItem[];
};

type NavItem = {
  text: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
};
