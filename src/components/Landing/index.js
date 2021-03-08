import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from "../Topbar"
import Container from '@material-ui/core/Container';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import * as ROUTES from '../../constants/routes';


const image = "https://res.cloudinary.com/konichar/image/upload/v1615219650/best-messaging.jpg"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme, img) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    objectFit: "cover",
    objectPosition: "15% 100%",
    boxShadow: "inset 0 0 0 2000px rgba(40, 13, 3, 0.4)",
    height: '100vh',

  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:  "#5A050D",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  // border: "3px solid green",
  },
  Rbutton: {
    backgroundColor:  "#5A050D",
    padding: theme.spacing(3)
  }
}));

export default function SignInSide() {
  const [ img, setImg ] = useState(0)
  const classes = useStyles(img);
  return (
    <>
    <Topbar></Topbar>
    <main className={classes.image} >
      {/* <CssBaseline /> */}
      <Container >
        <Box className={classes.box}>
          <Link to={ROUTES.SIGN_UP}>
        <Button  className={classes.Rbutton} size="large"  startIcon={<ExitToAppIcon />}>Register</Button>
          </Link>
        </Box>
      </Container>
      </main>
    </>
    
  );
}
