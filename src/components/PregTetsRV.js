import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import PregAtencion from './PregAtencionP';

function PregTets() {
  const router = useRouter();

  return (
    <Grid>
      <Grid>
        <PregAtencion />
      </Grid>
    </Grid>
  );
}

export default PregTets;
