import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/Home.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const schema = yup.object().shape({
  apellido: yup.string().required('Este campo es obligatorio.'),
  nombre: yup.string().required('Este campo es obligatorio.'),
  colegio: yup.string().required('Este campo es obligatorio.'),
  paralelo: yup
    .string()
    .max(1, 'Solo se debe escribir una letra en mayúscula.')
    .required('Este campo es obligatorio.'),
  numEstudiante: yup
    .string()
    .max(10, 'Solo se puede ingresar un número valido.')
    .required('Este campo es obligatorio.'),
  numRepresentante: yup
    .string()
    .max(9, 'Solo se puede ingresar un número valido.')
    .required('Este campo es obligatorio.'),
  email: yup
    .string()
    .email('Ingrese un correo válido.')
    .required('Este campo es obligatorio.'),
});

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#E9E9E9',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: '0px 0px 6px 0px',
    zIndex: 3,
  },
  textT: {
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
    },
    paddingLeft: 30,
  },
  cont1: {
    textAlign: 'center',
  },
  textfield: {
    color: '#113163',
    background: '#fff',
    width: '80%',
    height: 40,
  },
  button: {
    backgroundColor: '#fff',
  },
}));

function BodyC() {
  const classes = useStyles();
  const [result, setResult] = useState('');
  const [dataIU, setDataIU] = useState([]);
  const router = useRouter();
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [value, setValue] = useState('');

  const [errorsList, setErrorsList] = useState([]);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      const userData = {
        ...formData,
      };
      var ap = userData['apellido'];
      ap = ap.toUpperCase();
      userData['apellido'] = ap;
      var no = userData['nombre'];
      no = no.toUpperCase();
      userData['nombre'] = no;
      var par = userData['paralelo'];
      par = par.toUpperCase();
      userData['paralelo'] = par;
      var arrayUserData = JSON.stringify(userData);

      /*
      if (value) {
        userData['curso'] = value;
        router.push({
        pathname: '/testCHASIDE/0',
        query: { dataUser: arrayUserData },
      });
      } else {
        window.alert('Seleccione un curso');
      }*/
      router.push({
        pathname: '/testC',
        query: { dataUser: arrayUserData },
        });
        
      console.log(arrayUserData);

    } catch (e) {
      const { response } = e;
      setResult('Ocurrió un error :(');
      if (response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          const newErrorList = [];
          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
          setErrorsList(newErrorList);
        }
      }
    }
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid className={style.body}>
      <Grid style={{ display: 'flex' }}>
        <Grid item xs></Grid>
        <Grid
          item
          xs={8}
          style={{
            border: '1px solid',
            paddingTop: 30,
            paddingBottom: 30,
            backgroundColor: '#763484',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20 }}
            >
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Apellidos:
                  </Typography>
                </Grid>
                <Controller
                  name="apellido"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.apellido?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Nombres:
                  </Typography>
                </Grid>
                <Controller
                  name="nombre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.nombre?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Colegio:
                  </Typography>
                </Grid>
                <Controller
                  name="colegio"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.colegio?.message}
                </p>
              </Grid>
              <Grid item={true} style={{ paddingBottom: 15 }}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Correro electrónico:
                  </Typography>
                </Grid>
                <Controller
                  name="email"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      type="email"
                      size="small"
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.email?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Paralelo:
                  </Typography>
                </Grid>
                <Controller
                  name="paralelo"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.paralelo?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Número celular(personal):
                  </Typography>
                </Grid>
                <Controller
                  name="numEstudiante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.numEstudiante?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid style={{ paddingBottom: 15 }}>
                  <Typography variant="h5" className={classes.textT}>
                    Número celular representante:
                  </Typography>
                </Grid>
                <Controller
                  name="numRepresentante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      type="number"
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.numRepresentante?.message}
                </p>
              </Grid>

              <p style={{ color: '#fff' }}>{result}</p>

              {errorsList.length > 0 && (
                <ul>
                  {errorsList.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
              <Grid style={{ paddingBottom: 30 }}>
                <Button
                  type="submit"
                  variant="outlined"
                  className={classes.button}
                >
                  Empezar el test
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  );
}

export default BodyC;
