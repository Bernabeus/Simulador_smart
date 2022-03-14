import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '@fontsource/montserrat';
import Image from 'next/image';
import preg4 from '../../public/images/Preg4.png';
import preg5 from '../../public/images/Preg5.png';
import preg10 from '../../public/images/Preg10.png';
import preg14 from '../../public/images/Preg14.png';
import preg15 from '../../public/images/Preg15.png';
import preg20 from '../../public/images/Preg20.png';
import preg24 from '../../public/images/Preg24.png';
import preg25 from '../../public/images/Preg25.png';
import preg28 from '../../public/images/Preg28.png';
import preg29 from '../../public/images/Preg29.png';
import preg34 from '../../public/images/Preg34.png';
import preg35 from '../../public/images/Preg35.png';
import preg36 from '../../public/images/Preg36.png';
import preg37 from '../../public/images/Preg37.png';

const useStyles = makeStyles((theme) => ({
  text: {
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    // color: "#fff",
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.9vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
  },
  textA: {
    paddingRight: 25,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    // color: "#fff",
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.9vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
  },

  cont: {
    paddingBottom: 30,
  },
  cont1: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #67778F',
    borderTop: '2px solid #67778F',
    borderRight: '2px solid #67778F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  cont2: {
    paddingLeft: 50,
    borderBottom: '2px solid #67778F',
    borderLeft: '2px solid #67778F',
    borderRight: '2px solid #67778F',
    paddingBottom: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  cont3: {
    textAlign: 'center',
  },
  contT1: {
    height: 70,
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #67778F',
    borderTop: '2px solid #67778F',
    borderRight: '2px solid #67778F',
  },
  img: {
    borderLeft: '2px solid #67778F',
    borderRight: '2px solid #67778F',
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#1C2E93',
  },
  textT: {
    fontFamily: 'Montserrat',
    color: '#fff',
    paddingLeft: 10,
    [theme.breakpoints.up('xs')]: {
      fontSize: '3.5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5vw',
    },
  },
}));

const PregAtencion = ({ onSelectionPreg }) => {
  const classes = useStyles();
  const router = useRouter();
  const [value1, setValue1] = useState(0);
  const [valueA, setValueA] = useState(0);
  const [dataAp, setDataAp] = useState([]);

  const handleRadioChange1 = (event) => {
    setValue1(event.target.value);
    onSelectionPreg(event.target.value);
  };

  useEffect(() => {
    newArray();
  }, []);

  function newArray() {
    var arrayData = onSelectionPreg();
    //console.log(arrayData);
    setDataAp(arrayData);
    //setValueA(arrayData[1]);
    //console.log(arrayData[1]);
  }

  return (
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {dataAp.id ? (
        <Grid style={{ width: 800 }}>
          {dataAp.id == 1 ? (
            <Grid>
              <Grid
                style={{
                  backgroundColor: '#5DA4E1',
                  height: 50,
                  display: 'flex',
                  alignItems: 'center',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              >
                <Typography variant="h5" className={classes.textT}>
                  Atención y concentración:
                </Typography>
              </Grid>
              <Grid>
                <Grid className={classes.cont}>
                  <Grid className={classes.contT1}>
                    <Typography variant="h5" className={classes.text}>
                      {dataAp.question}
                    </Typography>
                  </Grid>
                  <Grid className={classes.cont2}>
                    <RadioGroup
                      defaultValue={valueA}
                      value={value1}
                      onChange={handleRadioChange1}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        value={dataAp.answer1}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textA}>
                            {dataAp.answer1}
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value={dataAp.answer2}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textA}>
                            {dataAp.answer2}
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value={dataAp.answer3}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textA}>
                            {dataAp.answer3}
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value={dataAp.answer4}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textA}>
                            {dataAp.answer4}
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <Grid>
              <Grid className={classes.cont}>
                <Grid className={classes.cont1}>
                  <Typography variant="h5" className={classes.text}>
                    {dataAp.question}
                  </Typography>
                </Grid>
                {dataAp.id == 4 ? (
                  <Grid className={classes.img}>
                    <Image src={preg4} width={600} />
                  </Grid>
                ) : dataAp.id == 5 ? (
                  <Grid className={classes.img}>
                    <Image src={preg5} />
                  </Grid>
                ) : dataAp.id == 10 ? (
                  <Grid className={classes.img}>
                    <Image src={preg10} />
                  </Grid>
                ) : dataAp.id == 14 ? (
                  <Grid className={classes.img}>
                    <Image src={preg14} />
                  </Grid>
                ) : dataAp.id == 15 ? (
                  <Grid className={classes.img}>
                    <Image src={preg15} />
                  </Grid>
                ) : dataAp.id == 20 ? (
                  <Grid className={classes.img}>
                    <Image src={preg20} />
                  </Grid>
                ) : dataAp.id == 24 ? (
                  <Grid className={classes.img}>
                    <Image src={preg24} />
                  </Grid>
                ) : dataAp.id == 25 ? (
                  <Grid className={classes.img}>
                    <Image src={preg25} />
                  </Grid>
                ) : dataAp.id == 28 ? (
                  <Grid className={classes.img}>
                    <Image src={preg28} />
                  </Grid>
                ) : dataAp.id == 29 ? (
                  <Grid className={classes.img}>
                    <Image src={preg29} />
                  </Grid>
                ) : dataAp.id == 34 ? (
                  <Grid className={classes.img}>
                    <Image src={preg34} />
                  </Grid>
                ) : dataAp.id == 35 ? (
                  <Grid className={classes.img}>
                    <Image src={preg35} />
                  </Grid>
                ) : dataAp.id == 36 ? (
                  <Grid className={classes.img}>
                    <Image src={preg36} />
                  </Grid>
                ) : dataAp.id == 37 ? (
                  <Grid className={classes.img}>
                    <Image src={preg37} />
                  </Grid>
                ) : (
                  <div></div>
                )}

                <Grid className={classes.cont2}>
                  <RadioGroup
                    value={value1}
                    onChange={handleRadioChange1}
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value={dataAp.answer1}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataAp.answer1}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={dataAp.answer2}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataAp.answer2}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={dataAp.answer3}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataAp.answer3}
                        </Typography>
                      }
                    />
                    <FormControlLabel
                      value={dataAp.answer4}
                      control={<Radio />}
                      label={
                        <Typography variant="h5" className={classes.textA}>
                          {dataAp.answer4}
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>
      ) : (
        <div></div>
      )}
    </Grid>
  );
};

export default PregAtencion;
