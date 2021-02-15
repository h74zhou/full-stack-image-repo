import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({
  half,
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant='outlined'
      required
      type={type}
      fullWidth
      label={label}
      InputLabelProps={{
        style: { color: '#fff' },
      }}
      autoFocus={autoFocus}
      InputProps={
        name === 'password'
          ? {
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword} color='primary'>
                    {type === 'password' ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Input;
