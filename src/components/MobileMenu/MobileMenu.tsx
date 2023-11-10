import { FC } from 'react';
import { MobileMenuProps } from './types';
import { NavItem } from '../NavItem/NavItem';
import { COMPANIES, FEATURES } from '../Header/constant.tsx';
import { MenuItem } from '../MenuItem/MenuItem';
import { Button } from '../Button/Button';

const mobileMenuOpen = 'transition ease-in-out duration-500 opacity-100';
const mobileMenuClose = 'transition ease-in-out duration-500 opacity-0';

const MobileMenu: FC<MobileMenuProps> = ({ isOpen = false }) => {
  return (
    <>
      <div className={isOpen ? mobileMenuOpen : mobileMenuClose}>
        <div
          className={
            'absolute top-0 left-0 right-0 bg-almost-black opacity-50 min-h-[150vh] flex ' +
            `${isOpen ? 'block' : 'hidden'}`
          }
        />
        <div className="absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] flex">
          <nav className="my-20 mx-5 space-y-5 text-lg w-full">
            <NavItem text="Features">
              <div className="flex flex-col space-y-5 p-2">
                {FEATURES.map(({ text, icon }) => (
                  <MenuItem
                    key={`${text}_menuItem_feature_burgerMenu`}
                    text={text}
                    icon={icon}
                  />
                ))}
              </div>
            </NavItem>
            <NavItem text="Company">
              <div className="flex flex-col space-y-5 p-2">
                {COMPANIES.map(({ text }) => (
                  <MenuItem
                    key={`${text}_menuItem_company_burgerMenu`}
                    text={text}
                  />
                ))}
              </div>
            </NavItem>
            <NavItem text="Careers" />
            <NavItem text="About" />
            <div className="flex flex-col space-y-5">
              <Button> Login </Button>
              <Button hasBorder={true}> Register </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export { MobileMenu };
