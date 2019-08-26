import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { Image } from '../../components/core';

const CarouselWrapper = styled.div`
  .--filter img {
    filter: blur(2px) brightness(60%);
    transform: scale(1.2, 1.2);
  }
  .--hover-scale:hover img {
    transition: 0.3s;
    transform: scale(1.2, 1.2);
  }
`;

const nextIdx = Object.freeze({
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 1,
});

const imgs = Object.freeze({
  1: 'https://luxury-inside.vn/data/uploads/2019/07/BILLIE-EILISH.jpg',
  2: 'https://images-i.jpimedia.uk/imagefetch/c_fill,f_auto,h_1700,q_auto:eco,w_1133/https://inews.co.uk/wp-content/uploads/2018/09/Ed-Sheeran-credit-Mark-Surridge.jpg',
  3: 'https://zmp3-photo-fbcrawler.zadn.vn/avatars/b/c/0/d/bc0d7f8d36ef96a040eaad24095d34b9.jpg',
  4: 'https://media.pitchfork.com/photos/59df93e9caee2b6f8e6d9c61/2:1/w_790/Linkin%20Park_Photo%20by%20Chelsea%20Lauren:WireImage_451103390_News.jpg',
  5: 'https://www.mtrend.vn/wp-content/uploads/2019/06/Charlie-Puth-la-ai.jpg',
});

const Carousel = ({ className }) => {
  const [hoverIdx, setHoverIdx] = useState(3);

  useEffect(() => {
    const timer = setTimeout(() => setHoverIdx(nextIdx[hoverIdx]), 10000);

    return () => clearTimeout(timer);
  }, [hoverIdx]);

  return (
    <CarouselWrapper className={cn('ui-carousel relative flex', className)}>
      <Image className="h-full w-full --filter" src={imgs[hoverIdx]} />
      <div className="absolute right-0 bottom-0 flex items-center justify-center">
        <Image className={cn('cursor-pointer rounded-full m-2 transition-fast --hover-scale', `${hoverIdx === 1 ? 'h-24 w-24' : 'h-12 w-12'}`)} src={imgs[1]} onMouseEnter={() => setHoverIdx(1)} />
        <Image className={cn('cursor-pointer rounded-full m-2 transition-fast --hover-scale', `${hoverIdx === 2 ? 'h-24 w-24' : 'h-12 w-12'}`)} src={imgs[2]} onMouseEnter={() => setHoverIdx(2)} />
        <Image className={cn('cursor-pointer rounded-full m-2 transition-fast --hover-scale', `${hoverIdx === 3 ? 'h-24 w-24' : 'h-12 w-12'}`)} src={imgs[3]} onMouseEnter={() => setHoverIdx(3)} />
        <Image className={cn('cursor-pointer rounded-full m-2 transition-fast --hover-scale', `${hoverIdx === 4 ? 'h-24 w-24' : 'h-12 w-12'}`)} src={imgs[4]} onMouseEnter={() => setHoverIdx(4)} />
        <Image className={cn('cursor-pointer rounded-full m-2 transition-fast --hover-scale', `${hoverIdx === 5 ? 'h-24 w-24' : 'h-12 w-12'}`)} src={imgs[5]} onMouseEnter={() => setHoverIdx(5)} />
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
