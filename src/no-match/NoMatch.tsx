import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NoMatch(): JSX.Element {
  const location = useLocation();

  return(
    <div>
      <h1 className="h1 center pad-top">404</h1>
      <h2 className="h2 center pad-bottom">Not found</h2>
      <p className="center">{location.pathname} was not found</p>

      <div className="center pad-top">
        <Link to="/">Back to safety</Link>
      </div>
    </div>
  );
}

export default NoMatch;
