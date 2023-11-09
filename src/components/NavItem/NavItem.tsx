import React, { FC, useState } from 'react';
import { NavItemProps } from './types';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

const NavItem: FC<NavItemProps> = ({ text = '', children }) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className='relative'>
      <div className='flex space-x-2 cursor-pointer items-center'
           onClick={() => children && setSelected(text !== selected ? text : '')}>
        <span className='text-medium-gray hover:text-almost-black'>{text}</span>
        {children && selected !== text && <ArrowDownIcon />}
        {children && selected === text && <ArrowUpIcon />}
      </div>
      {selected && children}
    </div>
  );
};

export { NavItem };
