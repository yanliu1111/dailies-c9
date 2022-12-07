import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <Typography variant="h2">Superhero Database</Typography>
      <Typography variant="body1">
        Please login to see the superheroes
      </Typography>
      <Button href="/api/login" variant="outlined">
        LOGIN
      </Button>
    </Box>
  );
};
export default Home;
