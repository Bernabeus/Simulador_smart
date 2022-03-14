import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';
import ExtensionIcon from '@material-ui/icons/Extension';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import Timer10Icon from '@material-ui/icons/Timer10';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  text: {
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.9vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
    },
  },
  textP: {
    paddingLeft: 15,
    paddingRight: 15,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2vw',
    },
  },
  textT: {
    fontFamily: 'Montserrat',
    color: '#000',
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5vw',
    },
  },
  contR: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
  },
  contT: {
    padding: theme.spacing(1),
  },
  contT1: {
    borderRadius: '30px 30px 0px 0px',
    backgroundColor: '#1C2E93',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  contT2: {
    borderRadius: '0px 0px 30px 30px',
    backgroundColor: '#1C2E93',
    paddingTop: 50,
    paddingBottom: 50,
  },
  conT3: {
    paddingBottom: 20,
  },
  contT4: {
    paddingTop: 20,
    paddingBottom: 15,
    textAlign: 'center',
    borderRadius: '50px',
    backgroundColor: '#1C2E93',
  },
  textPT: {
    fontFamily: 'Montserrat',
    color: '#fff',
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.7vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6vw',
    },
  },
  icon: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 12,
  },
  button: {
    backgroundColor: '#1C2E93',
    borderRadius: '30px',
    color: '#fff',
  },
}));

const BodyR = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const [stateComponent, setStateComponent] = useState(1);
  const [puntajeTotal, setPuntajeTotal] = useState(0);
  console.log('puntaje de todos', props.envPunt);

  useEffect(() => {
    puntaje();
  }, []);

  function puntaje() {
    const puntD = Number(props.envPunt[1][1]);
    const puntC = Number(props.envPunt[1][3]);
    const puntT =
      (props.envPunt[1][0] + puntD + puntC + props.envPunt[1][2]) / 4;
    puntT = puntT.toFixed(2);
    setPuntajeTotal(puntT);
  }

  const saveR = () => {
    saveData();
  };

  //Firebase
  function saveData() {
    router.push('/');
  }

  return (
    <Grid>
      <Grid>
        <Typography variant="h5" className={classes.textT}>
          Resultados
        </Typography>
        <Divider />
      </Grid>
      <Grid container className={classes.contR}>
        <Grid item xs={6} sm={3} className={classes.contT}>
          <Grid container className={classes.contT1}>
            <OfflinePinIcon className={classes.icon} />
            <Typography variant="h4" className={classes.text}>
              Atención y concentración
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: '#fff' }} />
          <Grid className={classes.contT2}>
            <Typography className={classes.textP}>
              {props.envPunt[1][0]} / 1000
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.contT}>
          <Grid container className={classes.contT1}>
            <ExtensionIcon className={classes.icon} />
            <Typography variant="h4" className={classes.text}>
              Razonamiento Lógico
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: '#fff' }} />
          <Grid className={classes.contT2}>
            <Typography className={classes.textP}>
              {props.envPunt[1][1]} / 1000
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.contT}>
          <Grid container className={classes.contT1}>
            <FontDownloadIcon className={classes.icon} />
            <Typography variant="h4" className={classes.text}>
              Razonamiento Verbal
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: '#fff' }} />
          <Grid className={classes.contT2}>
            <Typography className={classes.textP}>
              {props.envPunt[1][2]} / 1000
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={3} className={classes.contT}>
          <Grid container className={classes.contT1}>
            <Timer10Icon className={classes.icon} />
            <Typography variant="h4" className={classes.text}>
              Razonamiento Numérico
            </Typography>
          </Grid>
          <Divider style={{ backgroundColor: '#fff' }} />
          <Grid className={classes.contT2}>
            <Typography className={classes.textP}>
              {props.envPunt[1][3]} / 1000
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.conT3}>
        <Grid item xs></Grid>
        <Grid item xs={4} className={classes.contT4}>
          <Grid>
            <Typography className={classes.textPT}>Puntaje Total</Typography>
          </Grid>
          <Divider style={{ backgroundColor: '#fff' }} />
          <Grid style={{ paddingTop: 20 }}>
            <Typography className={classes.textPT}>
              {puntajeTotal} / 1000
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
      <Divider />
      <Grid style={{ paddingTop: 20, textAlign: 'center', paddingBottom: 50 }}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => saveR()}
        >
          Guardar resultados y salir
        </Button>
      </Grid>
    </Grid>
  );
};

export default BodyR;
