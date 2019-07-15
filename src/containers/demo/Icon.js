import React from 'react';
import Icon from '../../components/Icon';
import icons from '../../components/Icon/svg';

const list = Object.keys(icons).map(icon => ({ name: icon, size: '2xl', color: 'red-700' }));

export default class IconDemo extends React.Component {
  render() {
    return (
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center">
          {list.map((item, idx) => <Icon key={idx} {...item} className="m-2" />)}
        </div>
      </div>
    );
  }
}
