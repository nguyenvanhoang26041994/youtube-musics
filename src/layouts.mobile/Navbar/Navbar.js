import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon } from '../../components/core';

const NavbarWrapper = styled.nav`

`;

const Navbar = ({ className, children }) => {
  return (
    <NavbarWrapper className={cn('ui-navbar-mobile flex flex-col text-white', className)}>
      <div className="flex items-center justify-between w-full px-2 h-10 bg-teal-400">
        <Icon name="bars" size="lg" />
        <Icon name="search" size="lg" />
      </div>
      <div className="flex w-full">
        {children}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
