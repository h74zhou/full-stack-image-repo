import * as api from '../api/index.js';

export const signup = (formData, history) => async (dispatch) => {
  try {
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData, history) => async (dispatch) => {
  try {
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
