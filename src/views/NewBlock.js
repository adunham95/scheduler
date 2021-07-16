import React from 'react';
import { BlockForm } from '../components/BlockForm/BlockForm';
import { Layout } from '../components/Layout/Layout';

export const NewBlock = () => (
  <Layout>
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mb-2">
      New Block
    </h2>
    <BlockForm />
  </Layout>
);
