import './Item.scss';
import cn from 'classnames';
import React, { useState } from 'react';
import { Icon, VolumeGif } from '../../../../components/core';

class Item extends React.Component {
  state = { isShowCollapse: false };
  itemRef = React.createRef(null);
  menuRef = React.createRef(null);
  collapseRef = React.createRef(null);

  componentDidMount() {
    document.body.addEventListener('click', this.clickOutside);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.clickOutside);
  }

  clickOutside = e => {
    if (this.itemRef.current && this.itemRef.current.contains(e.target)) {
      return;
    }

    return this.setState({ isShowCollapse: false });
  };

  toggleShowCollapse = () => this.setState(prevState => ({ ...prevState, isShowCollapse: !prevState.isShowCollapse }));
  onChangeMusic = (e) => {
    if (this.menuRef.current && this.menuRef.current.contains(e.target)) {
      return;
    }

    if (this.collapseRef.current && this.collapseRef.current.contains(e.target)) {
      return;
    }

    return this.props.changeMusic(this.props.music);
  };

  render() {
    const { isShowCollapse, } = this.state;
    const { music, isActive, isPlaying } = this.props;

    return (
      <div className="flex flex-col px-2 hover:glass" ref={this.itemRef} onClick={this.onChangeMusic}>
        <div className="flex items-center relative h-10 cursor-pointer">
          <div className="flex flex-col leading-tight ml-2">
            <span className="text-sm text-white">{music.name}</span>
            <span className="text-xs text-gray-500">
              {music.singer.name}
            </span>
          </div>
          <div className="absolute right-0 mr-2">
            <Icon
              iName={isActive ? 'music' : 'ellipsis-h'}
              size="small"
              className={cn('text-sm text-white', { 'animated heartBeat infinite fast': isPlaying })}
              onClick={this.toggleShowCollapse} iconRef={this.menuRef}
            />
          </div>
        </div>
        <div className={cn('flex items-center justify-center transition-fast overflow-hidden', { 'h-10': isShowCollapse, 'h-0': !isShowCollapse })} ref={this.collapseRef}>
          <Icon iName="download" className="text-sm text-white mx-2" />
          <Icon iName="heart" className="text-sm text-white mx-2" />
          <Icon iName="share" className="text-sm text-white mx-2" />
          <Icon iName="plus" className="text-sm text-white mx-2" />
        </div>
      </div>
    );
  }
}

export default Item;
