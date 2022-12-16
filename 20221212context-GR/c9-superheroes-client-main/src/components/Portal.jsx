import { Box } from '@mui/material';
// import { useCallback } from 'react';
// import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import AuthProvider from './AuthProvider';

// export const AnthContetext = createContext(null);
// export const ThemeContext = createContext(null);

const Portal = () => {
  return (
    <AuthProvider>
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </AuthProvider>
  );
};

export default Portal;
