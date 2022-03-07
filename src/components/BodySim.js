import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import PreguntasA from './PregTetsA';
import PreguntasRL from './PregTetsRL';

function BodySim() {
  const router = useRouter();

  return (
    <Grid>
      <Grid>
        <PreguntasA />
      </Grid>
      <Grid>
        <PreguntasRL />
      </Grid>
    </Grid>
  );
}

export default BodySim;
