import React from 'react';
import { BlockList } from '../components/Block/BlockList';
import { Layout } from '../components/Layout/Layout';
import { NewBlockButton } from '../components/NewBlock/NewBlockButton';

export const Dashboard = () => (
  <Layout>
    <h1>Dashboard</h1>
    <NewBlockButton />
    {/* <BlockCard /> */}
    <BlockList />
  </Layout>
);
