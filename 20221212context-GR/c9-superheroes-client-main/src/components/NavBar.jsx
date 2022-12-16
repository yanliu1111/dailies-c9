import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnthContext, useAuth } from './AuthProvider';

export default function NavBar() {
  // const profile = useContext(AnthContext);
  const { profile } = useAuth();

  // const { profile, updateProfile, logout } = authContextValue; //sytax sugar for the 3 lines below; destructuring

  // const { profile } = authContextValue.profile;
  // const { updateProfile } = authContextValue.updateProfile;
  // const logout = authContextValue.logout;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Link to="/superheroes">
              <Button sx={{ color: 'white' }}>Superhero List</Button>
            </Link>
            <Link to="/superheroes/create">
              <Button sx={{ color: 'white' }}>Create Superhero</Button>
            </Link>
          </Box>
          {profile && (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
              <Button href="/api/logout" sx={{ color: 'white' }}>
                Logout
              </Button>
              <Avatar alt={profile.name} src={profile.picture} />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
