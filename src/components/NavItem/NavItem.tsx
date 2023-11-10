import { FC, useState } from 'react';
import { NavItemProps } from './types';
import ArrowDownIcon from '@assets/images/icon-arrow-down.svg?react';
import ArrowUpIcon from '@assets/images/icon-arrow-up.svg?react';

const NavItem: FC<NavItemProps> = ({ text = '', children }) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="relative">
      <div
        className="flex space-x-2 cursor-pointer items-center"
        onClick={() => children && setSelected(text !== selected ? text : '')}
      >
        <span className="text-medium-gray hover:text-almost-black">{text}</span>
        {children && selected !== text && <ArrowDownIcon />}
        {children && selected === text && <ArrowUpIcon />}
      </div>
      {selected && children}
    </div>
  );
};

export { NavItem };
