import cn from 'classnames';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Logo, Switch } from '../../components/core';

const NavbarWrapper = styled.nav`
`;

const onFullScreen = e => {
  const documentElement = document.documentElement;

  try {
    if (e.target.checked) {
      if (documentElement.requestFullscreen) {
        return documentElement.requestFullscreen();
      }

      if (documentElement.mozRequestFullScreen) {
        return documentElement.mozRequestFullScreen();
      }

      if (documentElement.msRequestFullscreen) {
        return documentElement.msRequestFullscreen();
      }
    }

    if (document.exitFullscreen) {
      return document.exitFullscreen();
    }

    if (document.webkitExitFullscreen) {
      return document.webkitExitFullscreen();
    }

    if (document.msExitFullscreen) {
      return document.msExitFullscreen();
    }
  } catch (e) {
    // DO SOME THING
  }
};

const Navbar = ({ className }) => (
  <NavbarWrapper className={cn('ui-navbar relative overflow-hidden flex justify-center text-white w-full h-16 bg-lizard-gradient', className)}>
    <div className="container-custom container flex items-center px-1">
      <div className="flex items-center flex-1">
        <div className="w-72">
          <Link href="/">
            <a><Logo className="w-8 h-8" /></a>
          </Link>
        </div>
      </div>
      <div>
        <Switch
          color="teal-400"
          size="sm"
          onChange={onFullScreen}
        />
      </div>
    </div>
  </NavbarWrapper>
);

Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  className: PropTypes.string,
};
Navbar.defaultProps = {};

export default Navbar;
