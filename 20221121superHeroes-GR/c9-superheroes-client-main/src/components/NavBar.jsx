import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar({ profile }) {
  console.log('data is ', profile);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/superheroes">
            <Button sx={{ color: 'white' }}>Superhero List</Button>
          </Link>
          <Link to="/superheroes/create">
            <Button sx={{ color: 'white' }}>Create Superhero</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
