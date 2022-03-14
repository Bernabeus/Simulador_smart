import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import PreguntasA from './PregTetsA';
import PreguntasRL from './PregTetsRL';
import PreguntasRV from './PregTetsRV';
import PreguntasRN from './PregTetsRN';
import TetsR from './BodyRes';

function BodySim() {
  const router = useRouter();
  const [stateComponent, setStateComponent] = useState(1);
  const [roundQA, setRoundQA] = useState([]);
  const [roundQRL, setRoundQRL] = useState([]);
  const [roundQRV, setRoundQRV] = useState([]);
  const [roundQRN, setRoundQRN] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [puntT, setPuntT] = useState([]);

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
    arrayVer.push(arrayC);
    arrayVer.push(arrayP);
    setPuntT(arrayVer);
    setStateComponent(estado);
  };

  return (
    <Grid>
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
        <div></div>
      )}
    </Grid>
  );
}

export default BodySim;
