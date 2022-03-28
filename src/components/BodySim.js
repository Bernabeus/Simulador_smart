import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  dataAtencion,
  dataRazonamientoL,
  dataRazonamientoN,
  dataRazonamientoV,
} from './DataTest.js';
import PregRazL from './PregRazonL';
import PregRazN from './PregRazonN';
import PregRazV from './PregRazonV';
import PregAtencion2 from './PregTetsA';
import PreguntasRL from './PregTetsRL';
import PreguntasRV from './PregTetsRV';
import PreguntasRN from './PregTetsRN';
import PregAtencion from './PregAtencion';
import Button from '@material-ui/core/Button';
import TetsR from './BodyRes';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  textH: {
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
  const [value41, setValue41] = useState(0);
  const [value42, setValue42] = useState(0);
  const [value43, setValue43] = useState(0);
  const [value44, setValue44] = useState(0);
  const [value45, setValue45] = useState(0);
  const [value46, setValue46] = useState(0);
  const [value47, setValue47] = useState(0);
  const [value48, setValue48] = useState(0);
  const [value49, setValue49] = useState(0);
  const [value50, setValue50] = useState(0);
  const [value51, setValue51] = useState(0);
  const [value52, setValue52] = useState(0);
  const [value53, setValue53] = useState(0);
  const [value54, setValue54] = useState(0);
  const [value55, setValue55] = useState(0);
  const [value56, setValue56] = useState(0);
  const [value57, setValue57] = useState(0);
  const [value58, setValue58] = useState(0);
  const [value59, setValue59] = useState(0);
  const [value60, setValue60] = useState(0);
  const [value61, setValue61] = useState(0);
  const [value62, setValue62] = useState(0);
  const [value63, setValue63] = useState(0);
  const [value64, setValue64] = useState(0);
  const [value65, setValue65] = useState(0);
  const [value66, setValue66] = useState(0);
  const [value67, setValue67] = useState(0);
  const [value68, setValue68] = useState(0);
  const [value69, setValue69] = useState(0);
  const [value70, setValue70] = useState(0);
  const [value71, setValue71] = useState(0);
  const [value72, setValue72] = useState(0);
  const [value73, setValue73] = useState(0);
  const [value74, setValue74] = useState(0);
  const [value75, setValue75] = useState(0);
  const [value76, setValue76] = useState(0);
  const [value77, setValue77] = useState(0);
  const [value78, setValue78] = useState(0);
  const [value79, setValue79] = useState(0);
  const [value80, setValue80] = useState(0);
  const [value81, setValue81] = useState(0);
  const [value82, setValue82] = useState(0);
  const [value83, setValue83] = useState(0);
  const [value84, setValue84] = useState(0);
  const [value85, setValue85] = useState(0);
  const [value86, setValue86] = useState(0);
  const [value87, setValue87] = useState(0);
  const [value88, setValue88] = useState(0);
  const [value89, setValue89] = useState(0);
  const [value90, setValue90] = useState(0);
  const [value91, setValue91] = useState(0);
  const [value92, setValue92] = useState(0);
  const [value93, setValue93] = useState(0);
  const [value94, setValue94] = useState(0);
  const [value95, setValue95] = useState(0);
  const [value96, setValue96] = useState(0);
  const [value97, setValue97] = useState(0);
  const [value98, setValue98] = useState(0);
  const [value99, setValue99] = useState(0);
  const [value100, setValue100] = useState(0);
  const [value101, setValue101] = useState(0);
  const [value102, setValue102] = useState(0);
  const [value103, setValue103] = useState(0);
  const [value104, setValue104] = useState(0);
  const [value105, setValue105] = useState(0);
  const [value106, setValue106] = useState(0);
  const [value107, setValue107] = useState(0);
  const [value108, setValue108] = useState(0);
  const [value109, setValue109] = useState(0);
  const [value110, setValue110] = useState(0);
  const [value111, setValue111] = useState(0);
  const [value112, setValue112] = useState(0);
  const [value113, setValue113] = useState(0);
  const [value114, setValue114] = useState(0);
  const [value115, setValue115] = useState(0);
  const [value116, setValue116] = useState(0);
  const [value117, setValue117] = useState(0);
  const [value118, setValue118] = useState(0);
  const [value119, setValue119] = useState(0);
  const [value120, setValue120] = useState(0);
  const [value121, setValue121] = useState(0);
  const [value122, setValue122] = useState(0);
  const [value123, setValue123] = useState(0);
  const [value124, setValue124] = useState(0);
  const [value125, setValue125] = useState(0);
  const [value126, setValue126] = useState(0);
  const [value127, setValue127] = useState(0);
  const [value128, setValue128] = useState(0);
  const [value129, setValue129] = useState(0);
  const [value130, setValue130] = useState(0);
  const [value131, setValue131] = useState(0);
  const [value132, setValue132] = useState(0);
  const [value133, setValue133] = useState(0);
  const [value134, setValue134] = useState(0);
  const [value135, setValue135] = useState(0);
  const [value136, setValue136] = useState(0);
  const [value137, setValue137] = useState(0);
  const [value138, setValue138] = useState(0);
  const [value139, setValue139] = useState(0);
  const [value140, setValue140] = useState(0);
  const [value141, setValue141] = useState(0);
  const [value142, setValue142] = useState(0);
  const [value143, setValue143] = useState(0);
  const [value144, setValue144] = useState(0);
  const [value145, setValue145] = useState(0);
  const [value146, setValue146] = useState(0);
  const [value147, setValue147] = useState(0);
  const [value148, setValue148] = useState(0);
  const [value149, setValue149] = useState(0);
  const [value150, setValue150] = useState(0);
  const [value151, setValue151] = useState(0);
  const [value152, setValue152] = useState(0);
  const [value153, setValue153] = useState(0);
  const [value154, setValue154] = useState(0);
  const [value155, setValue155] = useState(0);
  const [value156, setValue156] = useState(0);
  const [value157, setValue157] = useState(0);
  const [value158, setValue158] = useState(0);
  const [value159, setValue159] = useState(0);
  const [value160, setValue160] = useState(0);
  const [roundQA, setRoundQA] = useState([]);
  const [roundQRL, setRoundQRL] = useState([]);
  const [roundQRV, setRoundQRV] = useState([]);
  const [roundQRN, setRoundQRN] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [puntT, setPuntT] = useState([]);
  const [puntA, setPuntA] = useState(0);
  const [puntB, setPuntB] = useState(0);
  const [puntC, setPuntC] = useState(0);
  const [puntD, setPuntD] = useState(0);
  const [hourValue, setHourValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  useEffect(() => {
    timeC();
  }, []);

  function newArray(val) {
    let arrayN = [];
    arrayN.push(dataAtencion[val]);
    return arrayN;
  }

  function newArrayRL(val) {
    let arrayN = [];
    arrayN.push(dataRazonamientoL[val]);
    return arrayN;
  }

  function newArrayRN(val) {
    let arrayN = [];
    arrayN.push(dataRazonamientoN[val]);
    return arrayN;
  }

  function newArrayRV(val) {
    let arrayN = [];
    arrayN.push(dataRazonamientoV[val]);
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
    var arrayD = newArrayRL(0);
    if (valor != null) {
      setValue41(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue42 = (valor) => {
    var arrayD = newArrayRL(1);
    if (valor != null) {
      setValue42(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue43 = (valor) => {
    var arrayD = newArrayRL(2);
    if (valor != null) {
      setValue43(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue44 = (valor) => {
    var arrayD = newArrayRL(3);
    if (valor != null) {
      setValue44(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue45 = (valor) => {
    var arrayD = newArrayRL(4);
    if (valor != null) {
      setValue45(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue46 = (valor) => {
    var arrayD = newArrayRL(5);
    if (valor != null) {
      setValue46(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue47 = (valor) => {
    var arrayD = newArrayRL(6);
    if (valor != null) {
      setValue47(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue48 = (valor) => {
    var arrayD = newArrayRL(7);
    if (valor != null) {
      setValue48(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue49 = (valor) => {
    var arrayD = newArrayRL(8);
    if (valor != null) {
      setValue49(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue50 = (valor) => {
    var arrayD = newArrayRL(9);
    if (valor != null) {
      setValue50(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue51 = (valor) => {
    var arrayD = newArrayRL(10);
    if (valor != null) {
      setValue51(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue52 = (valor) => {
    var arrayD = newArrayRL(11);
    if (valor != null) {
      setValue52(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue53 = (valor) => {
    var arrayD = newArrayRL(12);
    if (valor != null) {
      setValue53(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue54 = (valor) => {
    var arrayD = newArrayRL(13);
    if (valor != null) {
      setValue54(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue55 = (valor) => {
    var arrayD = newArrayRL(14);
    if (valor != null) {
      setValue55(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue56 = (valor) => {
    var arrayD = newArrayRL(15);
    if (valor != null) {
      setValue56(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue57 = (valor) => {
    var arrayD = newArrayRL(16);
    if (valor != null) {
      setValue57(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue58 = (valor) => {
    var arrayD = newArrayRL(17);
    if (valor != null) {
      setValue58(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue59 = (valor) => {
    var arrayD = newArrayRL(18);
    if (valor != null) {
      setValue59(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue60 = (valor) => {
    var arrayD = newArrayRL(19);
    if (valor != null) {
      setValue60(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue61 = (valor) => {
    var arrayD = newArrayRL(20);
    if (valor != null) {
      setValue61(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue62 = (valor) => {
    var arrayD = newArrayRL(21);
    if (valor != null) {
      setValue62(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue63 = (valor) => {
    var arrayD = newArrayRL(22);
    if (valor != null) {
      setValue63(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue64 = (valor) => {
    var arrayD = newArrayRL(23);
    if (valor != null) {
      setValue64(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue65 = (valor) => {
    var arrayD = newArrayRL(24);
    if (valor != null) {
      setValue65(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue66 = (valor) => {
    var arrayD = newArrayRL(25);
    if (valor != null) {
      setValue66(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue67 = (valor) => {
    var arrayD = newArrayRL(26);
    if (valor != null) {
      setValue67(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue68 = (valor) => {
    var arrayD = newArrayRL(27);
    if (valor != null) {
      setValue68(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue69 = (valor) => {
    var arrayD = newArrayRL(28);
    if (valor != null) {
      setValue69(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue70 = (valor) => {
    var arrayD = newArrayRL(29);
    if (valor != null) {
      setValue70(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue71 = (valor) => {
    var arrayD = newArrayRL(30);
    if (valor != null) {
      setValue71(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue72 = (valor) => {
    var arrayD = newArrayRL(31);
    if (valor != null) {
      setValue72(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue73 = (valor) => {
    var arrayD = newArrayRL(32);
    if (valor != null) {
      setValue73(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue74 = (valor) => {
    var arrayD = newArrayRL(33);
    if (valor != null) {
      setValue74(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue75 = (valor) => {
    var arrayD = newArrayRL(34);
    if (valor != null) {
      setValue75(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue76 = (valor) => {
    var arrayD = newArrayRL(35);
    if (valor != null) {
      setValue76(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue77 = (valor) => {
    var arrayD = newArrayRL(36);
    if (valor != null) {
      setValue77(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue78 = (valor) => {
    var arrayD = newArrayRL(37);
    if (valor != null) {
      setValue78(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue79 = (valor) => {
    var arrayD = newArrayRL(38);
    if (valor != null) {
      setValue79(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue80 = (valor) => {
    var arrayD = newArrayRL(39);
    if (valor != null) {
      setValue80(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue81 = (valor) => {
    var arrayD = newArrayRV(0);
    if (valor != null) {
      setValue81(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue82 = (valor) => {
    var arrayD = newArrayRV(1);
    if (valor != null) {
      setValue82(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue83 = (valor) => {
    var arrayD = newArrayRV(2);
    if (valor != null) {
      setValue83(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue84 = (valor) => {
    var arrayD = newArrayRV(3);
    if (valor != null) {
      setValue84(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue85 = (valor) => {
    var arrayD = newArrayRV(4);
    if (valor != null) {
      setValue85(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue86 = (valor) => {
    var arrayD = newArrayRV(5);
    if (valor != null) {
      setValue86(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue87 = (valor) => {
    var arrayD = newArrayRV(6);
    if (valor != null) {
      setValue87(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue88 = (valor) => {
    var arrayD = newArrayRV(7);
    if (valor != null) {
      setValue88(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue89 = (valor) => {
    var arrayD = newArrayRV(8);
    if (valor != null) {
      setValue89(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue90 = (valor) => {
    var arrayD = newArrayRV(9);
    if (valor != null) {
      setValue90(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue91 = (valor) => {
    var arrayD = newArrayRV(10);
    if (valor != null) {
      setValue91(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue92 = (valor) => {
    var arrayD = newArrayRV(11);
    if (valor != null) {
      setValue92(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue93 = (valor) => {
    var arrayD = newArrayRV(12);
    if (valor != null) {
      setValue93(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue94 = (valor) => {
    var arrayD = newArrayRV(13);
    if (valor != null) {
      setValue94(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue95 = (valor) => {
    var arrayD = newArrayRV(14);
    if (valor != null) {
      setValue95(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue96 = (valor) => {
    var arrayD = newArrayRV(15);
    if (valor != null) {
      setValue96(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue97 = (valor) => {
    var arrayD = newArrayRV(16);
    if (valor != null) {
      setValue97(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue98 = (valor) => {
    var arrayD = newArrayRV(17);
    if (valor != null) {
      setValue98(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue99 = (valor) => {
    var arrayD = newArrayRV(18);
    if (valor != null) {
      setValue99(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue100 = (valor) => {
    var arrayD = newArrayRV(19);
    if (valor != null) {
      setValue100(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue101 = (valor) => {
    var arrayD = newArrayRV(20);
    if (valor != null) {
      setValue101(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue102 = (valor) => {
    var arrayD = newArrayRV(21);
    if (valor != null) {
      setValue102(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue103 = (valor) => {
    var arrayD = newArrayRV(22);
    if (valor != null) {
      setValue103(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue104 = (valor) => {
    var arrayD = newArrayRV(23);
    if (valor != null) {
      setValue104(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue105 = (valor) => {
    var arrayD = newArrayRV(24);
    if (valor != null) {
      setValue105(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue106 = (valor) => {
    var arrayD = newArrayRV(25);
    if (valor != null) {
      setValue106(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue107 = (valor) => {
    var arrayD = newArrayRV(26);
    if (valor != null) {
      setValue107(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue108 = (valor) => {
    var arrayD = newArrayRV(27);
    if (valor != null) {
      setValue108(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue109 = (valor) => {
    var arrayD = newArrayRV(28);
    if (valor != null) {
      setValue109(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue110 = (valor) => {
    var arrayD = newArrayRV(29);
    if (valor != null) {
      setValue110(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue111 = (valor) => {
    var arrayD = newArrayRV(30);
    if (valor != null) {
      setValue111(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue112 = (valor) => {
    var arrayD = newArrayRV(31);
    if (valor != null) {
      setValue112(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue113 = (valor) => {
    var arrayD = newArrayRV(32);
    if (valor != null) {
      setValue113(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue114 = (valor) => {
    var arrayD = newArrayRV(33);
    if (valor != null) {
      setValue114(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue115 = (valor) => {
    var arrayD = newArrayRV(34);
    if (valor != null) {
      setValue115(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue116 = (valor) => {
    var arrayD = newArrayRV(35);
    if (valor != null) {
      setValue116(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue117 = (valor) => {
    var arrayD = newArrayRV(36);
    if (valor != null) {
      setValue117(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue118 = (valor) => {
    var arrayD = newArrayRV(37);
    if (valor != null) {
      setValue118(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue119 = (valor) => {
    var arrayD = newArrayRV(38);
    if (valor != null) {
      setValue119(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue120 = (valor) => {
    var arrayD = newArrayRV(39);
    if (valor != null) {
      setValue120(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue121 = (valor) => {
    var arrayD = newArrayRN(0);
    if (valor != null) {
      setValue121(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue122 = (valor) => {
    var arrayD = newArrayRN(1);
    if (valor != null) {
      setValue122(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue123 = (valor) => {
    var arrayD = newArrayRN(2);
    if (valor != null) {
      setValue123(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue124 = (valor) => {
    var arrayD = newArrayRN(3);
    if (valor != null) {
      setValue124(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue125 = (valor) => {
    var arrayD = newArrayRN(4);
    if (valor != null) {
      setValue125(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue126 = (valor) => {
    var arrayD = newArrayRN(5);
    if (valor != null) {
      setValue126(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue127 = (valor) => {
    var arrayD = newArrayRN(6);
    if (valor != null) {
      setValue127(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue128 = (valor) => {
    var arrayD = newArrayRN(7);
    if (valor != null) {
      setValue128(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue129 = (valor) => {
    var arrayD = newArrayRN(8);
    if (valor != null) {
      setValue129(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue130 = (valor) => {
    var arrayD = newArrayRN(9);
    if (valor != null) {
      setValue130(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue131 = (valor) => {
    var arrayD = newArrayRN(10);
    if (valor != null) {
      setValue131(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue132 = (valor) => {
    var arrayD = newArrayRN(11);
    if (valor != null) {
      setValue132(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue133 = (valor) => {
    var arrayD = newArrayRN(12);
    if (valor != null) {
      setValue133(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue134 = (valor) => {
    var arrayD = newArrayRN(13);
    if (valor != null) {
      setValue134(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue135 = (valor) => {
    var arrayD = newArrayRN(14);
    if (valor != null) {
      setValue135(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue136 = (valor) => {
    var arrayD = newArrayRN(15);
    if (valor != null) {
      setValue136(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue137 = (valor) => {
    var arrayD = newArrayRN(16);
    if (valor != null) {
      setValue137(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue138 = (valor) => {
    var arrayD = newArrayRN(17);
    if (valor != null) {
      setValue138(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue139 = (valor) => {
    var arrayD = newArrayRN(18);
    if (valor != null) {
      setValue139(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue140 = (valor) => {
    var arrayD = newArrayRN(19);
    if (valor != null) {
      setValue140(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue141 = (valor) => {
    var arrayD = newArrayRN(20);
    if (valor != null) {
      setValue141(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue142 = (valor) => {
    var arrayD = newArrayRN(21);
    if (valor != null) {
      setValue142(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue143 = (valor) => {
    var arrayD = newArrayRN(22);
    if (valor != null) {
      setValue143(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue144 = (valor) => {
    var arrayD = newArrayRN(23);
    if (valor != null) {
      setValue144(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue145 = (valor) => {
    var arrayD = newArrayRN(24);
    if (valor != null) {
      setValue145(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue146 = (valor) => {
    var arrayD = newArrayRN(25);
    if (valor != null) {
      setValue146(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue147 = (valor) => {
    var arrayD = newArrayRN(26);
    if (valor != null) {
      setValue147(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue148 = (valor) => {
    var arrayD = newArrayRN(27);
    if (valor != null) {
      setValue148(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue149 = (valor) => {
    var arrayD = newArrayRN(28);
    if (valor != null) {
      setValue149(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue150 = (valor) => {
    var arrayD = newArrayRN(29);
    if (valor != null) {
      setValue150(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue151 = (valor) => {
    var arrayD = newArrayRN(30);
    if (valor != null) {
      setValue151(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue152 = (valor) => {
    var arrayD = newArrayRN(31);
    if (valor != null) {
      setValue152(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue153 = (valor) => {
    var arrayD = newArrayRN(32);
    if (valor != null) {
      setValue153(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue154 = (valor) => {
    var arrayD = newArrayRN(33);
    if (valor != null) {
      setValue154(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue155 = (valor) => {
    var arrayD = newArrayRN(34);
    if (valor != null) {
      setValue155(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue156 = (valor) => {
    var arrayD = newArrayRN(35);
    if (valor != null) {
      setValue156(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue157 = (valor) => {
    var arrayD = newArrayRN(36);
    if (valor != null) {
      setValue157(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue158 = (valor) => {
    var arrayD = newArrayRN(37);
    if (valor != null) {
      setValue158(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue159 = (valor) => {
    var arrayD = newArrayRN(38);
    if (valor != null) {
      setValue159(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue160 = (valor) => {
    var arrayD = newArrayRN(39);
    if (valor != null) {
      setValue160(valor);
    }
    return arrayD[0];
  };

  async function getValuesA() {
    window.scrollTo({
      top: 0,
    });
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
    setRoundQA(arrayA);

    var puntaje = 0;

    for (var i = 0; i < 20; i++) {
      if (arrayA[i] == dataAtencion[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    setPuntA(puntaje);

    const arrayP = [];
    const puntM = (puntaje * 500) / 20;
    arrayP.push(puntM);
    setPuntT(arrayP);
    setStateComponent(2);
  }

  async function getValuesA2() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];
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
    const arrayB = roundQA;
    const arrayN = arrayB.concat(arrayA);
    setRoundQA(arrayN);

    var puntaje = 0;

    for (var i = 20; i < dataAtencion.length; i++) {
      if (arrayA[i - 20] == dataAtencion[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    const arrayP = puntT;
    const puntajeA = puntA + puntaje;
    const puntM = (puntajeA * 1000) / 40;
    arrayP[0] = puntM;
    setPuntT(arrayP);
    setAnswers(arrayN);
    console.log(arrayN);
    setStateComponent(3);
  }

  async function getValuesRL() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];
    arrayA.push(value41);
    arrayA.push(value42);
    arrayA.push(value43);
    arrayA.push(value44);
    arrayA.push(value45);
    arrayA.push(value46);
    arrayA.push(value47);
    arrayA.push(value48);
    arrayA.push(value49);
    arrayA.push(value50);
    arrayA.push(value51);
    arrayA.push(value52);
    arrayA.push(value53);
    arrayA.push(value54);
    arrayA.push(value55);
    arrayA.push(value56);
    arrayA.push(value57);
    arrayA.push(value58);
    arrayA.push(value59);
    arrayA.push(value60);

    setRoundQRL(arrayA);

    var puntaje = 0;

    for (var i = 0; i < 20; i++) {
      if (arrayA[i] == dataRazonamientoL[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    setPuntB(puntaje);

    const arrayP = puntT;
    var puntM = (puntaje * 500) / 20;
    arrayP.push(puntM);
    setPuntT(arrayP);

    setStateComponent(4);
  }

  async function getValuesRL2() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];
    arrayA.push(value61);
    arrayA.push(value62);
    arrayA.push(value63);
    arrayA.push(value64);
    arrayA.push(value65);
    arrayA.push(value66);
    arrayA.push(value67);
    arrayA.push(value68);
    arrayA.push(value69);
    arrayA.push(value70);
    arrayA.push(value71);
    arrayA.push(value72);
    arrayA.push(value73);
    arrayA.push(value74);
    arrayA.push(value75);
    arrayA.push(value76);
    arrayA.push(value77);
    arrayA.push(value78);
    arrayA.push(value79);
    arrayA.push(value80);

    const arrayB = roundQRL;
    const arrayN = arrayB.concat(arrayA);
    setRoundQRL(arrayN);

    var puntaje = 0;

    for (var i = 20; i < dataRazonamientoL.length; i++) {
      if (arrayA[i - 20] == dataRazonamientoL[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    var arrayC = [];
    arrayC = arrayC.concat(answers);
    arrayC = arrayC.concat(arrayN);

    const arrayP = puntT;
    const puntajeA = puntB + puntaje;
    var puntM = (puntajeA * 1000) / 40;
    arrayP[1] = puntM;
    setPuntT(arrayP);
    setAnswers(arrayC);
    console.log(arrayC);

    setStateComponent(5);
  }

  async function getValuesRV() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];
    arrayA.push(value81);
    arrayA.push(value82);
    arrayA.push(value83);
    arrayA.push(value84);
    arrayA.push(value85);
    arrayA.push(value86);
    arrayA.push(value87);
    arrayA.push(value88);
    arrayA.push(value89);
    arrayA.push(value90);
    arrayA.push(value91);
    arrayA.push(value92);
    arrayA.push(value93);
    arrayA.push(value94);
    arrayA.push(value95);
    arrayA.push(value96);
    arrayA.push(value97);
    arrayA.push(value98);
    arrayA.push(value99);
    arrayA.push(value100);
    setRoundQRV(arrayA);

    var puntaje = 0;

    for (var i = 0; i < 20; i++) {
      if (arrayA[i] == dataRazonamientoV[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    setPuntC(puntaje);

    const arrayP = puntT;
    const puntM = (puntaje * 500) / 20;
    arrayP.push(puntM);
    setPuntT(arrayP);

    setStateComponent(6);
  }

  async function getValuesRV2() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];

    arrayA.push(value101);
    arrayA.push(value102);
    arrayA.push(value103);
    arrayA.push(value104);
    arrayA.push(value105);
    arrayA.push(value106);
    arrayA.push(value107);
    arrayA.push(value108);
    arrayA.push(value109);
    arrayA.push(value110);
    arrayA.push(value111);
    arrayA.push(value112);
    arrayA.push(value113);
    arrayA.push(value114);
    arrayA.push(value115);
    arrayA.push(value116);
    arrayA.push(value117);
    arrayA.push(value118);
    arrayA.push(value119);
    arrayA.push(value120);

    const arrayB = roundQRV;
    const arrayN = arrayB.concat(arrayA);
    setRoundQRV(arrayN);

    var puntaje = 0;

    for (var i = 20; i < dataRazonamientoV.length; i++) {
      if (arrayA[i - 20] == dataRazonamientoV[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    var arrayC = [];
    arrayC = arrayC.concat(answers);
    arrayC = arrayC.concat(arrayN);

    const arrayP = puntT;
    const puntajeA = puntC + puntaje;
    var puntM = (puntajeA * 1000) / 40;
    arrayP[2] = puntM;
    setPuntT(arrayP);
    setAnswers(arrayC);
    console.log(arrayC);

    setStateComponent(7);
  }

  async function getValuesRN() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];
    arrayA.push(value121);
    arrayA.push(value122);
    arrayA.push(value123);
    arrayA.push(value124);
    arrayA.push(value125);
    arrayA.push(value126);
    arrayA.push(value127);
    arrayA.push(value128);
    arrayA.push(value129);
    arrayA.push(value130);
    arrayA.push(value131);
    arrayA.push(value132);
    arrayA.push(value133);
    arrayA.push(value134);
    arrayA.push(value135);
    arrayA.push(value136);
    arrayA.push(value137);
    arrayA.push(value138);
    arrayA.push(value139);
    arrayA.push(value140);
    setRoundQRN(arrayA);

    var puntaje = 0;

    for (var i = 0; i < 20; i++) {
      if (arrayA[i] == dataRazonamientoN[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    setPuntD(puntaje);

    const arrayP = puntT;
    var puntM = (puntaje * 500) / 20;
    arrayP.push(puntM);
    setPuntT(arrayP);

    setStateComponent(8);
  }

  async function getValuesRN2() {
    window.scrollTo({
      top: 0,
    });
    const arrayA = [];

    arrayA.push(value141);
    arrayA.push(value142);
    arrayA.push(value143);
    arrayA.push(value144);
    arrayA.push(value145);
    arrayA.push(value146);
    arrayA.push(value147);
    arrayA.push(value148);
    arrayA.push(value149);
    arrayA.push(value150);
    arrayA.push(value151);
    arrayA.push(value152);
    arrayA.push(value153);
    arrayA.push(value154);
    arrayA.push(value155);
    arrayA.push(value156);
    arrayA.push(value157);
    arrayA.push(value158);
    arrayA.push(value159);
    arrayA.push(value160);
    const arrayB = roundQRN;
    const arrayN = arrayB.concat(arrayA);
    setRoundQRN(arrayN);

    var puntaje = 0;

    for (var i = 20; i < dataRazonamientoN.length; i++) {
      if (arrayA[i - 20] == dataRazonamientoN[i].answerC) {
        puntaje = puntaje + 1;
      }
    }

    var arrayC = [];
    arrayC = arrayC.concat(answers);
    arrayC = arrayC.concat(arrayN);

    const arrayP = puntT;
    const puntajeA = puntD + puntaje;
    var puntM = (puntajeA * 1000) / 40;
    arrayP[3] = puntM;
    setPuntT(arrayP);
    setAnswers(arrayC);
    console.log(arrayC);

    setStateComponent(9);
  }

  function timeC() {
    let toHour = 1;
    let toMinute = 0;
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
          <Grid>
            <Grid item xs></Grid>
            <Grid
              item
              xs={2}
              style={{
                paddingBottom: 20,
                position: 'fixed',
                display: 'flex',
                float: 'right',
                backgroundColor: '#fff',
                border: '1px solid #000',
                width: '70px',
              }}
            >
              <Typography variant="h5" className={classes.textH}>
                {minValue}:{secValue}
              </Typography>
            </Grid>
          </Grid>

          {stateComponent == 1 ? (
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
              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesA()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Avanzar a la ronda 2
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 2 ? (
            <Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue21} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue22} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue23} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue24} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue25} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue26} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue27} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue28} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue29} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue30} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue31} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue32} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue33} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue34} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue35} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue36} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue37} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue38} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue39} />
              </Grid>
              <Grid>
                <PregAtencion2 onSelectionPreg={handleChangeValue40} />
              </Grid>
              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesA2()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Continuar a razonamiento lógico
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 3 ? (
            <Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue41} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue42} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue43} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue44} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue45} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue46} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue47} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue48} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue49} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue50} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue51} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue52} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue53} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue54} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue55} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue56} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue57} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue58} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue59} />
              </Grid>
              <Grid>
                <PregRazL onSelectionPreg={handleChangeValue60} />
              </Grid>

              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRL()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Avanzar a la ronda 2
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 4 ? (
            <Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue61} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue62} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue63} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue64} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue65} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue66} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue67} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue68} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue69} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue70} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue71} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue72} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue73} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue74} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue75} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue76} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue77} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue78} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue79} />
              </Grid>
              <Grid>
                <PreguntasRL onSelectionPreg={handleChangeValue80} />
              </Grid>

              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRL2()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Continuar a razonamiento verbal
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 5 ? (
            <Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue81} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue82} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue83} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue84} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue85} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue86} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue87} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue88} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue89} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue90} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue91} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue92} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue93} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue94} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue95} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue96} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue97} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue98} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue99} />
              </Grid>
              <Grid>
                <PregRazV onSelectionPreg={handleChangeValue100} />
              </Grid>

              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRV()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Avanzar a la ronda 2
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 6 ? (
            <Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue101} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue102} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue103} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue104} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue105} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue106} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue107} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue108} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue109} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue110} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue111} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue112} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue113} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue114} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue115} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue116} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue117} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue118} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue119} />
              </Grid>
              <Grid>
                <PreguntasRV onSelectionPreg={handleChangeValue120} />
              </Grid>
              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRV2()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Continuar a razonamiento numerico
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 7 ? (
            <Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue121} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue122} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue123} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue124} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue125} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue126} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue127} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue128} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue129} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue130} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue131} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue132} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue133} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue134} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue135} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue136} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue137} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue138} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue139} />
              </Grid>
              <Grid>
                <PreguntasRN onSelectionPreg={handleChangeValue140} />
              </Grid>
              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRN()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Avanzar a la ronda 2
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 8 ? (
            <Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue141} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue142} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue143} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue144} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue145} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue146} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue147} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue148} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue149} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue150} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue151} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue152} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue153} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue154} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue155} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue156} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue157} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue158} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue159} />
              </Grid>
              <Grid>
                <PregRazN onSelectionPreg={handleChangeValue160} />
              </Grid>

              <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
                <Button
                  variant="outlined"
                  onClick={() => getValuesRN2()}
                  style={{
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    color: '#fff',
                    backgroundColor: '#763484',
                  }}
                >
                  Finalizar
                </Button>
              </Grid>
            </Grid>
          ) : stateComponent == 9 ? (
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
