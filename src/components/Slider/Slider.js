import './Slider.scss';
import React, { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import getPageX from '../../utils/getPageX';

const Slider = ({ className, percent, onChange, ...otherProps }) => {
  const sliderRef = useRef(null);
  const onClick = e => onChange(e, { value: (e.pageX - getPageX(sliderRef.current))/sliderRef.current.offsetWidth })

  return (
    <div className={cn('ui-slider h-1 cursor-pointer relative', className)} {...otherProps} onClick={onClick} ref={sliderRef}>
      <div className="ui-slider__rail absolute w-full h-full bg-gray-100 rounded-full" />
      <div
        className="ui-slider__track bg-blue-500 absolute h-full rounded-full --transition"
        style={{ width: `${percent * 100}%` }}
      />
      <div
        className="ui-slider__handler --position absolute bottom-0 h-3 w-3 bg-white rounded-full --transition"
        style={{ left: `${percent * 100}%` }}
      />
    </div>
  );
};

Slider.displayName = 'Slider';
Slider.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  onChange: PropTypes.func,
};
Slider.defaultProps = {
  percent: 0,
  onChange: f => f,
};

export default Slider;
