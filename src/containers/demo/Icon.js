import React from 'react';
import Icon from '../../components/Icon';
import icons from '../../components/Icon/svg';

const IconCard = props => {
  return (
    <div className="h-24 w-24 flex items-center justify-center m-1">
      <Icon {...props} />
    </div>
  );
};

const list = Object.keys(icons).map(icon => ({ name: icon, size: 'lg', color: 'red-700' }));

export default class IconDemo extends React.Component {
  render() {
    return (
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center flex-1">
          {list.map((item, idx) => <IconCard key={idx} {...item} className="m-2" />)}
        </div>
      </div>
    );
  }
}
