import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '@fontsource/montserrat';

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
    paddingTop: 20,
    paddingBottom: 20,
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

const PregRazV = ({ onSelectionPreg }) => {
  const classes = useStyles();
  const router = useRouter();
  const [value1, setValue1] = useState(0);
  const [dataAp, setDataAp] = useState([]);

  const handleRadioChange1 = (event) => {
    setValue1(event.target.value);
    onSelectionPreg(event.target.value);
  };

  useEffect(() => {
    newArray();
  }, [onSelectionPreg]);

  function newArray() {
    var arrayData = onSelectionPreg();
    //console.log(arrayData);
    setDataAp(arrayData);
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
                  Razonamiento Verbal:
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
                    {dataAp.answer5 ? (
                      <FormControlLabel
                        value={dataAp.answer5}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textA}>
                            {dataAp.answer5}
                          </Typography>
                        }
                      />
                    ) : (
                      ''
                    )}
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

export default PregRazV;
