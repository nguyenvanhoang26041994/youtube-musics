import './Item.scss';
import cn from 'classnames';
import React, { useState } from 'react';
import { Icon } from '../../../../components/core';

class Item extends React.Component {
  state = { isShowCollapse: false };

  componentDidMount() {

  }

  itemRef = React.createRef(null);

  toggleShowCollapse = () => this.setState(prevState => ({ ...prevState, isShowCollapse: !prevState.isShowCollapse }));

  changeMusic = () => this.props.changeMusic(this.props.music)

  render() {
    const { isShowCollapse } = this.state;
    const { music } = this.props;

    return (
      <div className="flex flex-col px-2 hover:glass" ref={this.itemRef}>
        <div className="flex items-center relative h-10 cursor-pointer">
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-white" onClick={this.changeMusic}>{music.name}</span>
            <span className="text-xs text-gray-500">{music.singer.name}</span>
          </div>
          <Icon iName="ellipsis-h" className="text-sm text-white absolute right-0 mr-2" onClick={this.toggleShowCollapse} />
        </div>
        <div className={cn('flex items-center justify-center transition-fast overflow-hidden', { 'h-10': isShowCollapse, 'h-0': !isShowCollapse })}>
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
