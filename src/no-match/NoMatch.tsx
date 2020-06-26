import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Typography, Container, Button, Box } from '@material-ui/core';

function NoMatch(): JSX.Element {
  const location = useLocation();

  return(
    <Container maxWidth="xl">
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Not found</Typography>
      <Typography variant="body1">{location.pathname} was not found</Typography>
      <Box mt={1}>
        <Button variant="outlined" color="primary"><Link to="/">Back to safety</Link></Button>
      </Box>
    </Container>
  );
}

export default NoMatch;
