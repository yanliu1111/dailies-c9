import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Portal = () => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    }
    fetchProfile();
  }, []);

  return (
    <Box>
      <NavBar profile={profile} />
      <h1>Superheroes</h1>
      <Outlet />
    </Box>
  );
};
export default Portal;
