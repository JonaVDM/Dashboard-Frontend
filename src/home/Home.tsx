import React from 'react';
import Dashboard, { useStyles } from '../dashboard/Dashbaord';
import { Grid, Paper, Typography } from '@material-ui/core';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';

interface Props {
  name: string
}

function Home({ name }: Props) {
  const styles = useStyles();

  return (
    <Dashboard>
      <Grid item sm={12}>
        <Paper className={styles.paper}>
          <Typography component="h3" variant="h3">Hi {name}</Typography>
        </Paper>
      </Grid>
    </Dashboard>
  );
}

function mapState(state: RootState) {
  return {
    name: state.auth.user.name
  }
}

export default connect(mapState)(Home);
