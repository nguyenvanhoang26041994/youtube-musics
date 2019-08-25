import React, { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getPageX from '../../utils/getPageX';

const SliderWrapper = styled.div`
  &.h-tiny {
    height: 0.15rem;
  }

  &.ui-slider {
    .ui-slider__handler {
      &.--position {
        transform: translate(-50%, 0.35rem);
      }
    }

    .ui-slider__track,
    .ui-slider__handler {
      &.--transition {
        transition: all 0.1s;
        transition-timing-function: ease-in-out;
      }
    }
  }
`;

const Slider = ({ className, percent, onChange, ...otherProps }) => {
  const sliderRef = useRef(null);
  const onClick = e => onChange(e, { value: (e.pageX - getPageX(sliderRef.current))/sliderRef.current.offsetWidth })

  return (
    <SliderWrapper className={cn('ui-slider h-tiny cursor-pointer relative', className)} {...otherProps} onClick={onClick} ref={sliderRef}>
      <div className="ui-slider__rail absolute w-full h-full bg-gray-100 rounded-full" />
      <div
        className="ui-slider__track bg-teal-400 absolute h-full rounded-full --transition"
        style={{ width: `${percent * 100}%` }}
      />
      <div
        className="ui-slider__handler --position absolute bottom-0 h-3 w-3 bg-white rounded-full --transition"
        style={{ left: `${percent * 100}%` }}
      />
    </SliderWrapper>
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
