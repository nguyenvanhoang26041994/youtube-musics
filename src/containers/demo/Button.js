import React from 'react';
import { Button, Icon } from '../../components/core';

const ButtonDemo = () => {
  return (
    <div className="h-screen bg-white p-10 text-white">
      <div className="container flex items-center mx-auto mb-1">
        <Button color="teal-500" className="mr-1">Click</Button>
        <Button color="teal-500" className="mr-1"><Icon name="heart" color="red-500" /></Button>
        <Button color="purple-500" className=" mr-1">
          <Icon name="heart" color="red-500" className="mr-2" />
          Click
        </Button>
        <Button color="red-500" className="mr-1">
          <Icon name="heart" className="mr-2" />
          Click
        </Button>
        <Button color="blue-500" className="mr-1">
          Click
          <Icon name="repeat" className="ml-2" />
        </Button>
        <Button color="blue-600" className="mr-1">
          <Icon name="heart" className="mr-2" />
          Click
          <Icon name="repeat" className="ml-2" />
        </Button>
        <Button color="blue-300" className="mr-1">
          <Icon name="heart" className="mr-2" />
          Click
          <Icon name="repeat" className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
