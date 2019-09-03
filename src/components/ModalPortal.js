/**
 * https://github.com/tajo/react-portal/blob/master/src/Portal.js
 */
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import canUseDOM from '../utils/canUseDOM';

class ModalPortal extends React.Component {
  componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;

    this.props.unmountCallback();
  }

  render() {
    if (!canUseDOM) {
      return null;
    }
    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');

      // flag for query
      this.defaultNode.className = 'modal-container w-0 h-0 fixed top-0 left-0 z-50';
      document.body.appendChild(this.defaultNode);
    }
    return ReactDOM.createPortal(
      this.props.children,
      this.props.node || this.defaultNode,
    );
  }
}

ModalPortal.propTypes = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any,
  unmountCallback: PropTypes.func,
};
ModalPortal.defaultProps = {
  unmountCallback: f => f,
};

export default ModalPortal;