import React from 'react';
import { Button, Icon } from '../../components/core';

const ButtonDemo = () => {
  return (
    <div>
      <div className="container flex items-center mx-auto mb-1">
        <Button color="teal" type="ghost" className="mr-1">Click</Button>
        <Button color="purple" className=" mr-1">
          <Icon name="heart" color="red" className="mr-2" size="sm" />
          Click
        </Button>
        <Button color="red" round="full" className="mr-1">
          <Icon name="heart" className="mr-2" size="sm" />
          Click
        </Button>
        <Button color="blue" round="full" className="mr-1">
          Click
          <Icon name="repeat" className="ml-2" size="sm" />
        </Button>
        <Button color="blue" round="none" className="mr-1" type="ghost">
          <Icon name="heart" size="sm" className="mr-2" />
          Click
          <Icon name="repeat" size="sm" className="ml-2" />
        </Button>
        <Button color="blue" round="none" className="mr-1" className="text-white">
          <Icon name="heart" size="sm" className="mr-2" />
          Click
          <Icon name="repeat" size="sm" className="ml-2" />
        </Button>
      </div>
      <div className="container flex items-center mx-auto">
        <Button color="teal" className="mr-1" type="ghost" size="xs">Click</Button>
        <Button color="purple" className="mr-1" size="xs">
          <Icon name="heart" color="red" className="mr-2" size="xs" />
          Click
        </Button>
        <Button color="red" round="full" className="mr-1" size="xs">
          <Icon name="heart" className="mr-2" size="xs" />
          Click
        </Button>
        <Button color="blue" round="full" className="mr-1" size="xs">
          Click
          <Icon name="repeat" className="ml-2" size="xs" />
        </Button>
        <Button color="blue" round="none" className="mr-1" type="ghost" size="xs">
          <Icon name="heart" size="xs" className="mr-2" />
          Click
          <Icon name="repeat" size="xs" className="ml-2" />
        </Button>
        <Button color="blue" round="none" className="mr-1" className="text-white" size="xs">
          <Icon name="heart" size="xs" className="mr-2" />
          Click
          <Icon name="repeat" size="xs" className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
