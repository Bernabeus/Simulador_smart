import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import PreguntasA from './PregTetsA';
import PreguntasRL from './PregTetsRL';
import PreguntasRV from './PregTetsRV';
import PreguntasRN from './PregTetsRN';
import TetsR from './BodyRes';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'Montserrat',
    color: '#000',
    fontWeight: 'bold',
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
}));

function BodySim() {
  const classes = useStyles();
  const [stateComponent, setStateComponent] = useState(1);
  const [roundQA, setRoundQA] = useState([]);
  const [roundQRL, setRoundQRL] = useState([]);
  const [roundQRV, setRoundQRV] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [puntT, setPuntT] = useState([]);
  const [hourValue, setHourValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  useEffect(() => {
    timeC();
  }, []);

  const getValuesA = (puntaje, valEs, estado) => {
    //console.log(puntaje);
    setRoundQA(valEs);
    const arrayP = [];
    var puntM = (puntaje * 1000) / 40;
    arrayP.push(puntM);
    setPuntT(arrayP);
    setStateComponent(estado);
  };
  const getValuesRL = (puntaje, valEs, estado) => {
    //console.log(puntaje);
    //console.log(valEs);
    setRoundQRL(valEs);
    const arrayC = roundQA;
    const arrayP = puntT;
    var puntM = (puntaje * 1000) / 46;
    puntM = puntM.toFixed(2);
    arrayP.push(puntM);
    setPuntT(arrayP);
    setAnswers(arrayC);
    setStateComponent(estado);
  };
  const getValuesRV = (puntaje, valEs, estado) => {
    //console.log(puntaje);
    //console.log(valEs);
    setRoundQRV(valEs);
    const arrayC = answers;
    arrayC = arrayC.concat(roundQRL);
    const arrayP = puntT;
    var puntM = (puntaje * 1000) / 40;
    arrayP.push(puntM);
    setPuntT(arrayP);
    setAnswers(arrayC);
    setStateComponent(estado);
  };
  const getValuesRN = (puntaje, valEs, estado) => {
    //console.log(puntaje);
    //console.log(valEs);
    const arrayC = answers;
    arrayC = arrayC.concat(roundQRV);
    arrayC = arrayC.concat(valEs);
    setAnswers(arrayC);
    const arrayP = puntT;
    var puntM = (puntaje * 1000) / 46;
    puntM = puntM.toFixed(2);
    arrayP.push(puntM);
    const arrayVer = [];
    //arrayVer.push(arrayC);
    arrayVer.push(arrayP);
    setPuntT(arrayVer);
    setStateComponent(estado);
  };

  function timeC() {
    let toHour = 0;
    let toMinute = 2;
    let toSecond = 0;

    //cuenta atras
    function countDown() {
      if (--toSecond < 0) {
        toSecond = 59;
        if (--toMinute < 0) {
          toMinute = 59;
          toHour--;
        }
      }

      if (toHour < 0) {
        clearInterval(interval);
      } else {
        setSecValue(toSecond);
        setMinValue(toMinute);
        setHourValue(toHour);
      }
    }

    let interval = setInterval(countDown, 1000);
  }

  return (
    <Grid>
      {minValue + secValue != 0 ? (
        <Grid>
          <Grid
            style={{
              textAlign: 'right',
              paddingBottom: 20,
            }}
          >
            <Typography variant="h5" className={classes.text}>
              {minValue}:{secValue}
            </Typography>
          </Grid>

          {stateComponent == 1 ? (
            <Grid>
              <PreguntasA onValuesPreg={getValuesA} />
            </Grid>
          ) : stateComponent == 2 ? (
            <Grid>
              <PreguntasRL onValuesPreg={getValuesRL} />
            </Grid>
          ) : stateComponent == 3 ? (
            <Grid>
              <PreguntasRV onValuesPreg={getValuesRV} />
            </Grid>
          ) : stateComponent == 4 ? (
            <Grid>
              <PreguntasRN onValuesPreg={getValuesRN} />
            </Grid>
          ) : stateComponent == 5 ? (
            <Grid>
              <TetsR envPunt={puntT} />
            </Grid>
          ) : (
            <dic></dic>
          )}
        </Grid>
      ) : (
        <Grid>
          <TetsR envPunt={puntT} />
        </Grid>
      )}
    </Grid>
  );
}

export default BodySim;
