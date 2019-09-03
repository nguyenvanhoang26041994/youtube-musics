import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import useClickOutside from '../../hooks/useClickOutside';
const ModalPortal = dynamic(() => import('../ModalPortal'), { ssr: false });

const CustomStyle = styled.div`
  left: 50%;

  &.ui-modal--top {
    top: 10%;
    transform: translateX(-50%);
  }

  &.ui-modal--center {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .ui-modal__controller {
  }
`;

const Wrapper = styled.div``;

const positions = Object.freeze({
  top: 'ui-modal--top',
  center: 'ui-modal--center',
});

const Modal = ({ className, modalClassName, isOpen, onClose, position, size, children }) => {
  if (!isOpen) {
    return null;
  }

  const modalRef = useRef();
  useClickOutside(modalRef, onClose);

  return (
    <ModalPortal onClose={onClose}>
      <CustomStyle className={cn('ui-modal fixed', positions[position], modalClassName)} ref={modalRef}>
        <Wrapper className={cn('relative', className)}>
          {/* <div className="ui-modal__controller bg-white absolute w-full rounded-top-lg h-8 top-0 translate-y-mfull" style={{}} /> */}
          {children}
        </Wrapper>
      </CustomStyle>
    </ModalPortal>
  );
};

Modal.propTypes = {};
Modal.defaultProps = {
  position: 'top',
};

export default Modal;
