import React from 'react';
import { Switch } from '../../components/core';

const SwitchDemo = () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div className="h-screen bg-white p-10 text-white">
      <div className="container flex flex-col mx-auto mb-1">
        <Switch className="m-2" size="xs" checked={checked} onChange={() => setChecked(false)} />
        <Switch className="m-2" size="sm" color="green-400" checked={checked} onChange={() => setChecked(prevValue => !prevValue)} />
        <Switch className="m-2" color="yellow-400" checked={checked} onChange={() => setChecked(prevValue => !prevValue)} />
        <Switch className="m-2" size="lg" color="blue-400" checked={checked} onChange={() => setChecked(prevValue => !prevValue)} />
        <Switch className="m-2" size="xl" color="purple-400" checked={checked} onChange={() => setChecked(prevValue => !prevValue)} />
        <Switch className="m-2" size="2xl" color="red-400" disabled checked={checked} onChange={() => setChecked(prevValue => !prevValue)} />
        <Switch className="m-2" size="3xl" color="pink-400" defaultChecked />
      </div>
    </div>
  );
};

export default SwitchDemo;
