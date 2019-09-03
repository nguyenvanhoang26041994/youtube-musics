import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { Logo, Switch, Modal, Icon } from '../../components/core';
import LoginForm from '../../components/LoginForm';

const NavbarWrapper = styled.nav``;

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

const Navbar = ({ className }) => {
  const [isShowLoginForm, setShowLoginForm] = useState(false);
  const onToggleShowLoginForm = () => setShowLoginForm(prevValue => !prevValue);

  return (
    <NavbarWrapper className={cn('ui-navbar relative overflow-hidden flex justify-center text-white w-full h-16', className)}>
      <div className="container-custom container flex items-center px-1">
        <div className="flex items-center flex-1">
          <div className="w-72">
            <Link href="/">
              <a><Logo className="w-8 h-8" /></a>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-indigo-500 mx-2 text-sm">
            <Modal isOpen={isShowLoginForm} onClose={() => setShowLoginForm(false)} position="top">
              <LoginForm style={{ minWidth: '25rem' }} />
            </Modal>
            <div className="cursor-pointer select-none" onClick={onToggleShowLoginForm}>Đăng nhập</div>
            <span className="mx-1">/</span>
            <div className="cursor-pointer select-none" onClick={onToggleShowLoginForm}>Đăng ký</div>
          </div>
          <Icon name="search" color="indigo-500" className="ml-5" />
        </div>
      </div>
    </NavbarWrapper>
  );
}

Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  className: PropTypes.string,
};
Navbar.defaultProps = {};

export default Navbar;
