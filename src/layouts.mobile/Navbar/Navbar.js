import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon } from '../../components/core';

const NavbarWrapper = styled.nav`

`;

const Navbar = ({ className }) => {
  return (
    <NavbarWrapper className={cn('ui-navbar-mobile flex items-center bg-blue-400 text-white', className)}>
      <div className="flex items-center justify-between w-full px-2">
        <Icon name="bars" />
        <Icon name="search" />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
