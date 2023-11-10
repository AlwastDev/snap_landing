import { FunctionComponent, SVGProps } from 'react';

export type MenuItemProps = {
  text?: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
};
