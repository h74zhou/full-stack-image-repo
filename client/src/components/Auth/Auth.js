import React, { useState } from 'react';
import {
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from '@material-ui/core';
import Input from './Input';
import Icon from './Icon';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, login } from '../../actions/auth';

import useStyles from './styles';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function Auth() {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initState);
  const [showPassword, setShowPassword] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatchEvent(signup(formData, history));
    } else {
      dispatchEvent(login(formData, history));
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchSignUp = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = (res) => {
    console.log(res);
  };

  const googleFailure = () => {
    console.log('GOOGLE LOG IN WAS UNSUCCESSFUL');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Log In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
            />
            {isSignup && (
              <Input
                name='confirmPassword'
                label='Repeat Password'
                handleChange={handleChange}
                type='password'
              ></Input>
            )}
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Log In With Email'}
          </Button>
          <GoogleLogin
            clientId='GOOGLE ID'
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color='primary'
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon></Icon>}
                variant='contained'
              >
                {' '}
                Log In With Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          ></GoogleLogin>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchSignUp}>
                {isSignup
                  ? 'I already have an account'
                  : "I don't have an account"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
