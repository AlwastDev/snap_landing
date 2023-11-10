import { FC } from 'react';
import { MenuItemProps } from './types';

const MenuItem: FC<MenuItemProps> = ({ text = '', icon }) => {
  return (
    <div className="flex w-full space-x-4">
      <>{icon}</>
      <span className="text-medium-gray hover:text-almost-black cursor-pointer">
        {text}
      </span>
    </div>
  );
};

export { MenuItem };
