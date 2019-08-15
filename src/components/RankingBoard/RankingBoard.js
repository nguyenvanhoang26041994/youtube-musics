import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Image } from '../../components/core';

const Item = ({ name, index, img, singersName }) => (
  <div className="flex h-10 items-center cursor-pointer">
    <div className="text-white text-2xs font-mono w-16 flex justify-center items-center">{index}</div>
    <Image className="h-10 w-10 mr-2" src={img} />
    <div className="flex flex-col">
      <div className="text-white text-sm">{name}</div>
      <div className="text-gray-500 text-xs">{singersName}</div>
    </div>
  </div>
)

const RankingBoard = ({ className, musics }) => {
  return (
    <div className={cn('ui-rank-board flex flex-col', className)}>
      <h2 className="flex justify-start items-center text-4xl text-teal-500 font-bold ml-8">TOP</h2>
      <ul className="flex flex-col">
        {musics.map((music, idx) => (
          <li key={idx} className="py-2 hover:glass">
            <Item {...music} index={idx + 1} />
          </li>
        ))}
        <li className="h-64" />
      </ul>
    </div>
  );
}

RankingBoard.displayName = 'RankingBoard';
RankingBoard.propTypes = {
  className: PropTypes.string,
  musics: PropTypes.array,
};
RankingBoard.defaultProps = {
  musics: [],
};

export default RankingBoard;
