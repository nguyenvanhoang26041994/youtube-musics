import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import Icon from '../../components/Icon';

const AnimationIconStyled = styled(Icon)`
`;

const AnimationIcon = props => {
  return (
    <AnimationIconStyled {...props} />
  );
};

export default AnimationIcon;
