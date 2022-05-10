import axios from 'axios';

import { usersActions } from '../slices/user.slice';

const API_URL = 'http://localhost:4000/api/v1/users/';

export const login = (accountNumber, password) => {
  return async dispatch => {
    try {
      const dataUser = { accountNumber, password };
      console.log('esto llega del login', dataUser);
      const res = await axios.post(`${API_URL}login`, dataUser);
      const newUser = res.data;
      console.log(newUser);
      dispatch(usersActions.login(newUser));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, password) => {
  return async dispatch => {
    try {
      const dataUser = { name, password };
      const res = await axios.post(`${API_URL}signup`, dataUser);
      const { newUser } = res.data;
      console.log(newUser);
      dispatch(usersActions.newUser({ newUser }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
