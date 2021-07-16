import React from 'react';
import { Link } from 'react-router-dom';
import { BlockList } from '../components/Block/BlockList';
import { Layout } from '../components/Layout/Layout';

export const Blocks = () => (
  <Layout>
    <Link
      to="/blocks/new"
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
    >
      New Block
    </Link>
    <BlockList />
  </Layout>
);
