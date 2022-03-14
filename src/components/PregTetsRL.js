import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import PregAtencion from './PregRazonL';
import Button from '@material-ui/core/Button';
import { dataRazonamientoL } from './DataTest.js';

const PregTets = ({ onValuesPreg }) => {
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
  const [value46, setValue46] = useState(0);
  const [value41, setValue41] = useState(0);
  const [value42, setValue42] = useState(0);
  const [value43, setValue43] = useState(0);
  const [value44, setValue44] = useState(0);
  const [value45, setValue45] = useState(0);

  function newArray(val) {
    let arrayN = [];
    arrayN.push(dataRazonamientoL[val]);
    return arrayN;
  }

  const handleChangeValue1 = (valor) => {
    var arrayD = newArray(0);
    if (valor != null) {
      setValue1(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue2 = (valor) => {
    var arrayD = newArray(1);
    if (valor != null) {
      setValue2(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue3 = (valor) => {
    var arrayD = newArray(2);
    if (valor != null) {
      setValue3(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue4 = (valor) => {
    var arrayD = newArray(3);
    if (valor != null) {
      setValue4(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue5 = (valor) => {
    var arrayD = newArray(4);
    if (valor != null) {
      setValue5(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue6 = (valor) => {
    var arrayD = newArray(5);
    if (valor != null) {
      setValue6(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue7 = (valor) => {
    var arrayD = newArray(6);
    if (valor != null) {
      setValue7(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue8 = (valor) => {
    var arrayD = newArray(7);
    if (valor != null) {
      setValue8(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue9 = (valor) => {
    var arrayD = newArray(8);
    if (valor != null) {
      setValue9(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue10 = (valor) => {
    var arrayD = newArray(9);
    if (valor != null) {
      setValue10(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue11 = (valor) => {
    var arrayD = newArray(10);
    if (valor != null) {
      setValue11(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue12 = (valor) => {
    var arrayD = newArray(11);
    if (valor != null) {
      setValue12(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue13 = (valor) => {
    var arrayD = newArray(12);
    if (valor != null) {
      setValue13(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue14 = (valor) => {
    var arrayD = newArray(13);
    if (valor != null) {
      setValue14(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue15 = (valor) => {
    var arrayD = newArray(14);
    if (valor != null) {
      setValue15(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue16 = (valor) => {
    var arrayD = newArray(15);
    if (valor != null) {
      setValue16(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue17 = (valor) => {
    var arrayD = newArray(16);
    if (valor != null) {
      setValue17(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue18 = (valor) => {
    var arrayD = newArray(17);
    if (valor != null) {
      setValue18(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue19 = (valor) => {
    var arrayD = newArray(18);
    if (valor != null) {
      setValue19(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue20 = (valor) => {
    var arrayD = newArray(19);
    if (valor != null) {
      setValue20(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue21 = (valor) => {
    var arrayD = newArray(20);
    if (valor != null) {
      setValue21(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue22 = (valor) => {
    var arrayD = newArray(21);
    if (valor != null) {
      setValue22(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue23 = (valor) => {
    var arrayD = newArray(22);
    if (valor != null) {
      setValue23(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue24 = (valor) => {
    var arrayD = newArray(23);
    if (valor != null) {
      setValue24(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue25 = (valor) => {
    var arrayD = newArray(24);
    if (valor != null) {
      setValue25(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue26 = (valor) => {
    var arrayD = newArray(25);
    if (valor != null) {
      setValue26(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue27 = (valor) => {
    var arrayD = newArray(26);
    if (valor != null) {
      setValue27(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue28 = (valor) => {
    var arrayD = newArray(27);
    if (valor != null) {
      setValue28(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue29 = (valor) => {
    var arrayD = newArray(28);
    if (valor != null) {
      setValue29(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue30 = (valor) => {
    var arrayD = newArray(29);
    if (valor != null) {
      setValue30(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue31 = (valor) => {
    var arrayD = newArray(30);
    if (valor != null) {
      setValue31(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue32 = (valor) => {
    var arrayD = newArray(31);
    if (valor != null) {
      setValue32(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue33 = (valor) => {
    var arrayD = newArray(32);
    if (valor != null) {
      setValue33(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue34 = (valor) => {
    var arrayD = newArray(33);
    if (valor != null) {
      setValue34(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue35 = (valor) => {
    var arrayD = newArray(34);
    if (valor != null) {
      setValue35(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue36 = (valor) => {
    var arrayD = newArray(35);
    if (valor != null) {
      setValue36(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue37 = (valor) => {
    var arrayD = newArray(36);
    if (valor != null) {
      setValue37(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue38 = (valor) => {
    var arrayD = newArray(37);
    if (valor != null) {
      setValue38(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue39 = (valor) => {
    var arrayD = newArray(38);
    if (valor != null) {
      setValue39(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue40 = (valor) => {
    var arrayD = newArray(39);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue41 = (valor) => {
    var arrayD = newArray(40);
    if (valor != null) {
      setValue41(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue42 = (valor) => {
    var arrayD = newArray(41);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue43 = (valor) => {
    var arrayD = newArray(42);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue44 = (valor) => {
    var arrayD = newArray(43);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue45 = (valor) => {
    var arrayD = newArray(44);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue46 = (valor) => {
    var arrayD = newArray(45);
    if (valor != null) {
      setValue40(valor);
    }
    return arrayD[0];
  };

  async function sendValuesS() {
    const arrayA = [];
    arrayA.push(value1);
    arrayA.push(value2);
    arrayA.push(value3);
    arrayA.push(value4);
    arrayA.push(value5);
    arrayA.push(value6);
    arrayA.push(value7);
    arrayA.push(value8);
    arrayA.push(value9);
    arrayA.push(value10);
    arrayA.push(value11);
    arrayA.push(value12);
    arrayA.push(value13);
    arrayA.push(value14);
    arrayA.push(value15);
    arrayA.push(value16);
    arrayA.push(value17);
    arrayA.push(value18);
    arrayA.push(value19);
    arrayA.push(value20);
    arrayA.push(value21);
    arrayA.push(value22);
    arrayA.push(value23);
    arrayA.push(value24);
    arrayA.push(value25);
    arrayA.push(value26);
    arrayA.push(value27);
    arrayA.push(value28);
    arrayA.push(value29);
    arrayA.push(value30);
    arrayA.push(value31);
    arrayA.push(value32);
    arrayA.push(value33);
    arrayA.push(value34);
    arrayA.push(value35);
    arrayA.push(value36);
    arrayA.push(value37);
    arrayA.push(value38);
    arrayA.push(value39);
    arrayA.push(value40);
    arrayA.push(value41);
    arrayA.push(value42);
    arrayA.push(value43);
    arrayA.push(value44);
    arrayA.push(value45);
    arrayA.push(value46);

    var puntaje = 0;

    for (var i = 0; i < dataRazonamientoL.length; i++) {
      if (arrayA[i] == dataRazonamientoL[i].answerC) {
        puntaje = puntaje + 1;
      }
    }
    var estado = 3;
    onValuesPreg(puntaje, arrayA, estado);
  }

  async function sendValuesA() {
    const arrayA = [];
    arrayA.push(value1);
    arrayA.push(value2);
    arrayA.push(value3);
    arrayA.push(value4);
    arrayA.push(value5);
    arrayA.push(value6);
    arrayA.push(value7);
    arrayA.push(value8);
    arrayA.push(value9);
    arrayA.push(value10);
    arrayA.push(value11);
    arrayA.push(value12);
    arrayA.push(value13);
    arrayA.push(value14);
    arrayA.push(value15);
    arrayA.push(value16);
    arrayA.push(value17);
    arrayA.push(value18);
    arrayA.push(value19);
    arrayA.push(value20);
    arrayA.push(value21);
    arrayA.push(value22);
    arrayA.push(value23);
    arrayA.push(value24);
    arrayA.push(value25);
    arrayA.push(value26);
    arrayA.push(value27);
    arrayA.push(value28);
    arrayA.push(value29);
    arrayA.push(value30);
    arrayA.push(value31);
    arrayA.push(value32);
    arrayA.push(value33);
    arrayA.push(value34);
    arrayA.push(value35);
    arrayA.push(value36);
    arrayA.push(value37);
    arrayA.push(value38);
    arrayA.push(value39);
    arrayA.push(value40);
    arrayA.push(value41);
    arrayA.push(value42);
    arrayA.push(value43);
    arrayA.push(value44);
    arrayA.push(value45);
    arrayA.push(value46);

    var puntaje = 0;

    for (var i = 0; i < dataRazonamientoL.length; i++) {
      if (arrayA[i] == dataRazonamientoL[i].answerC) {
        puntaje = puntaje + 1;
      }
    }
    var estado = 1;
    onValuesPreg(puntaje, arrayA, estado);
  }

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
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue41} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue42} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue43} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue44} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue45} />
      </Grid>
      <Grid>
        <PregAtencion onSelectionPreg={handleChangeValue46} />
      </Grid>

      <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
        <Button
          variant="outlined"
          onClick={() => sendValuesS()}
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#763484',
            marginLeft: 10,
          }}
        >
          Siguiente
        </Button>
      </Grid>
    </Grid>
  );
};

export default PregTets;

/*
<Button
          type="submit"
          variant="outlined"
          onClick={() => sendValuesA()}
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#763484',
          }}
        >
          Anterior
        </Button>
      
*/
