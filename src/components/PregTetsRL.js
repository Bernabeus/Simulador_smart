import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import PregAtencion from './PregRazonL';
import Button from '@material-ui/core/Button';
import { dataRazonamientoL } from 'src/components/DataTest.js';

function PregTets() {
  const router = useRouter();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);
  const [value11, setValue11] = useState(0);
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState(0);
  const [value14, setValue14] = useState(0);
  const [value15, setValue15] = useState(0);
  const [value16, setValue16] = useState(0);
  const [value17, setValue17] = useState(0);
  const [value18, setValue18] = useState(0);
  const [value19, setValue19] = useState(0);
  const [value20, setValue20] = useState(0);
  const [value21, setValue21] = useState(0);
  const [value22, setValue22] = useState(0);
  const [value23, setValue23] = useState(0);
  const [value24, setValue24] = useState(0);
  const [value25, setValue25] = useState(0);
  const [value26, setValue26] = useState(0);
  const [value27, setValue27] = useState(0);
  const [value28, setValue28] = useState(0);
  const [value29, setValue29] = useState(0);
  const [value30, setValue30] = useState(0);
  const [value31, setValue31] = useState(0);
  const [value32, setValue32] = useState(0);
  const [value33, setValue33] = useState(0);
  const [value34, setValue34] = useState(0);
  const [value35, setValue35] = useState(0);
  const [value36, setValue36] = useState(0);
  const [value37, setValue37] = useState(0);
  const [value38, setValue38] = useState(0);
  const [value39, setValue39] = useState(0);
  const [value40, setValue40] = useState(0);
  const [dataAp, setDataAp] = useState([]);

  function newArray(data) {
    let arrayN = [];
    for (let i = 1; i <= data.length; i++) {
      arrayN.push(data[i - 1]);
    }
    return arrayN;
  }

  const handleChangeValue1 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue1(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue2 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue2(valor);
    }
    return arrayD[1];
  };

  const handleChangeValue3 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue3(valor);
    }
    return arrayD[2];
  };

  const handleChangeValue4 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue4(valor);
    }
    return arrayD[3];
  };

  const handleChangeValue5 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue5(valor);
    }
    return arrayD[4];
  };

  const handleChangeValue6 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue6(valor);
    }
    return arrayD[5];
  };

  const handleChangeValue7 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue7(valor);
    }
    return arrayD[6];
  };

  const handleChangeValue8 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue8(valor);
    }
    return arrayD[7];
  };

  const handleChangeValue9 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue9(valor);
    }
    return arrayD[8];
  };

  const handleChangeValue10 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue10(valor);
    }
    return arrayD[9];
  };

  const handleChangeValue11 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue11(valor);
    }
    return arrayD[10];
  };

  const handleChangeValue12 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue12(valor);
    }
    return arrayD[11];
  };

  const handleChangeValue13 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue13(valor);
    }
    return arrayD[12];
  };

  const handleChangeValue14 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue14(valor);
    }
    return arrayD[13];
  };

  const handleChangeValue15 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue15(valor);
    }
    return arrayD[14];
  };

  const handleChangeValue16 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue16(valor);
    }
    return arrayD[15];
  };

  const handleChangeValue17 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue17(valor);
    }
    return arrayD[16];
  };

  const handleChangeValue18 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue18(valor);
    }
    return arrayD[17];
  };

  const handleChangeValue19 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue19(valor);
    }
    return arrayD[18];
  };

  const handleChangeValue20 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue20(valor);
    }
    return arrayD[19];
  };

  const handleChangeValue21 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue21(valor);
    }
    return arrayD[20];
  };

  const handleChangeValue22 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue22(valor);
    }
    return arrayD[21];
  };

  const handleChangeValue23 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue23(valor);
    }
    return arrayD[22];
  };

  const handleChangeValue24 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue24(valor);
    }
    return arrayD[23];
  };

  const handleChangeValue25 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue25(valor);
    }
    return arrayD[24];
  };

  const handleChangeValue26 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue26(valor);
    }
    return arrayD[25];
  };

  const handleChangeValue27 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue27(valor);
    }
    return arrayD[26];
  };

  const handleChangeValue28 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue28(valor);
    }
    return arrayD[27];
  };

  const handleChangeValue29 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue29(valor);
    }
    return arrayD[28];
  };

  const handleChangeValue30 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue30(valor);
    }
    return arrayD[29];
  };

  const handleChangeValue31 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue31(valor);
    }
    return arrayD[30];
  };

  const handleChangeValue32 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue32(valor);
    }
    return arrayD[31];
  };

  const handleChangeValue33 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue33(valor);
    }
    return arrayD[32];
  };

  const handleChangeValue34 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue34(valor);
    }
    return arrayD[33];
  };

  const handleChangeValue35 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue35(valor);
    }
    return arrayD[34];
  };

  const handleChangeValue36 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue36(valor);
    }
    return arrayD[35];
  };

  const handleChangeValue37 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue37(valor);
    }
    return arrayD[36];
  };

  const handleChangeValue38 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue38(valor);
    }
    return arrayD[37];
  };

  const handleChangeValue39 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue39(valor);
    }
    return arrayD[38];
  };

  const handleChangeValue40 = (valor) => {
    var arrayD = newArray(dataRazonamientoL);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[39];
  };

  return (
    <Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue1} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue2} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue3} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue4} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue5} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue6} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue7} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue8} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue9} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue10} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue11} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue12} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue13} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue14} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue15} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue16} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue17} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue18} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue19} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue20} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue21} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue22} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue23} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue24} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue25} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue26} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue27} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue28} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue29} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue30} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue31} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue32} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue33} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue34} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue35} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue36} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue37} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue38} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue39} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue40} />
      </Grid>
      <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
        <Button
          type="submit"
          variant="outlined"
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#763484',
          }}
        >
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
}

export default PregTets;
