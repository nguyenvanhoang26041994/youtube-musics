import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ClickOutside extends React.Component {
  componentDidMount() {
    this.clickOutsideFunction =  this.getClickOutsideFunction();
    this.node = ReactDOM.findDOMNode(this);
    document.body.addEventListener('click', this.onClickOutside);
  }

  componentDidUpdate() {
    if (this.props.update) {
      this.node = ReactDOM.findDOMNode(this);
      document.body.removeEventListener('click', this.onClickOutside);
      document.body.addEventListener('click', this.onClickOutside);
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.onClickOutside);
  }

  getClickOutsideFunction = () => {
    this._owner = this.props.children._owner;
    let stateNode = this._owner.stateNode;
    let child = this._owner.child;

    do {
      child = child && child.child;
      stateNode = child && child.stateNode;
    } while(!stateNode || !stateNode._clickOutside);

    return stateNode && stateNode._clickOutside;
  };

  onClickOutside = (e) => {
    if (this.node && this.node.contains(e.target)) {
      return 'clickInside';
    }

    return this.clickOutsideFunction && this.clickOutsideFunction(e);
  };

  render() {
    return this.props.children;
  }
}

ClickOutside.propTypes = {
  onClickOutside: PropTypes.func,
  update: PropTypes.bool,
};
ClickOutside.defaultProps = {
  onClickOutside: f => f,
  update: false,
};
