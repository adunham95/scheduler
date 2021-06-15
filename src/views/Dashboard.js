import React from 'react';
import { BlockList } from '../components/Block/BlockList';
import { NewBlockButton } from '../components/NewBlock/NewBlockButton';

export const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <NewBlockButton />
    {/* <BlockCard /> */}
    <BlockList />
  </div>
);
