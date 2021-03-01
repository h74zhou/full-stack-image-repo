import React from 'react';
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

function Home({ currentId, setcurrentId }) {
  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid> */}
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
