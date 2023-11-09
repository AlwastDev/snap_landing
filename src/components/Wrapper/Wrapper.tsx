import React, { FC } from 'react';
import { WrapperProps } from './types';

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="container mx-auto py-4 px-2 min-h-screen">
      {children}
    </div>
  );
};

export { Wrapper };
