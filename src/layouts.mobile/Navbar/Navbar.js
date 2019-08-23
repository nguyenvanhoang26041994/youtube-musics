import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Icon } from '../../components/core';

const NavbarWrapper = styled.nav`

`;

const Navbar = ({ className }) => {
  return (
    <NavbarWrapper className={cn('ui-navbar-mobile flex items-center bg-teal-400 text-white', className)}>
      <div className="flex items-center justify-between w-full px-2">
        <Icon name="bars" size="lg" />
        <Icon name="search" size="lg" />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
