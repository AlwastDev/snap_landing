import React, { FC } from 'react';
import { NavMenuProps } from './types';
import { MenuItem } from '../MenuItem/MenuItem';

const NavMenu: FC<NavMenuProps> = ({ items = [] }) => {
  return (
    <div className="flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-999">
      {items.map(({ text, icon }) => <MenuItem key={`${text}_menuItem`} text={text} icon={icon}/>)}
    </div>
  );
};

export { NavMenu };
