import React from 'react';

import RootRoutes from '@/routes/root.routes';

const Routes: React.FC = () => {
  const isAuthenticated = true;
  return isAuthenticated ? <RootRoutes /> : null;
};

export default Routes;
