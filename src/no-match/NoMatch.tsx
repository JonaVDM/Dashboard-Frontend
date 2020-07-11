import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NoMatch(): JSX.Element {
  const location = useLocation();

  return(
    <h1>Not found</h1>
    // <Container maxWidth="xl">
    //   <Typography variant="h1">404</Typography>
    //   <Typography variant="h3">Not found</Typography>
    //   <Typography variant="body1">{location.pathname} was not found</Typography>
    //   <Box mt={1}>
    //     <Button variant="outlined" color="primary"><Link to="/">Back to safety</Link></Button>
    //   </Box>
    // </Container>
  );
}

export default NoMatch;
