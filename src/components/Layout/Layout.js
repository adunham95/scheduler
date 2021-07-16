import React from 'react';

export const Layout = ({ children, className = '' }) => (
  <main className={`max-w-7xl mx-auto py-6 p-1 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </main>
);
