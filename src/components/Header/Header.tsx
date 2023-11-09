import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { NavItem } from '../NavItem/NavItem';
import { NavMenu } from '../NavMenu/NavMenu';
import { COMPANIES, FEATURES } from './constant.js';
import { Button } from '../Button/Button';

const Header = () => {
  return (
    <header className='flex items-center'>
      <LogoIcon />
      <nav className='flex space-x-6 ml-8 items-center'>
        <NavItem text='Feature'>
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text='Company'>
          <NavMenu items={COMPANIES} />
        </NavItem>
        <NavItem text='Careers'></NavItem>
        <NavItem text='About'></NavItem>
      </nav>
      <div className='ml-auto flex space-x-5'>
        <Button>Login</Button>
        <Button hasBorder={true}>Register</Button>
      </div>
    </header>
  );
};

export { Header };
