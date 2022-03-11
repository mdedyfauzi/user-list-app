import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

export default function Login(err) {
  const [inputLoginNanny, setInputLoginNanny] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const changeInput = (e) => {
    setInputLoginNanny({
      ...inputLoginNanny,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // const data = new FormData(event.currentTarget);
    axios
      .post('https://fakestoreapi.com/auth/login', {
        // firstName: data.get('username'),
        // lastName: data.get('password'),
        firstName: inputLoginNanny.username,
        lastName: inputLoginNanny.password,
      })
      .then(function (response) {
        console.log(response, 'response');
      })
      .catch(function (error) {
        err = error;
        console.log(error, 'error');
      });
  };

  console.log('firstName:', inputLoginNanny.username, ' lastName:', inputLoginNanny.password);

  return (
    // <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // border: 'solid',
          // borderWidth: '1px',
          borderRadius: 2,
          padding: 5,
          // position: 'relative',
          boxShadow: '1px 2px 2px 1px #888888',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            sx={{
              background: 'rgb(248, 248, 248)',
              borderColor: 'none',
            }}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => changeInput(e)}
          />
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => changeInput(e)} />
          <LoadingButton
            // type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            endIcon={<LoginIcon />}
            onClick={handleSubmit}
            // onClick={handleSubmit}
            loading={loading}
            loadingPosition="end"
          >
            Sign In
            {/* <Link to="/#">Sign In</Link> */}
          </LoadingButton>
        </Box>
        {err !== String ? undefined : <Alert severity="error">username or password is incorrect</Alert>}
      </Box>
    </Container>
    // </ThemeProvider>
  );
}
