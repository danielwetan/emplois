import axios from 'axios';

const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.43.186:3000/api/v1/talent/auth/login',
      data: {
        email: data.email,
        password: data.password,
      },
    }),
  };
};

const register = (data) => {
  return {
    type: 'REGISTER',
    payload: axios({
      method: 'post',
      url: 'http://192.168.43.186:3000/api/v1/talent/auth/register',
      data: {
        name: data.name,
        email: data.email,
        phone_number: data.phone_number,
        password: data.password,
      },
    }),
  };
};

const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export { login, register, logout };
