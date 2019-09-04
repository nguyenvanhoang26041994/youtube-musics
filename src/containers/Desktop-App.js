import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Desktop from './HomePage/HomePage.desktop';

export default () => {
  useEffect(() => {
    Desktop;
  },[]);
  return (
    <Desktop />
  );
}
