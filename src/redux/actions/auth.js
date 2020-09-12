import axios from 'axios';

const login = (data) => {
  return {
    type: 'LOGIN',
    payload: axios({
      method: 'POST',
      url: 'http://192.168.43.186:3000/auth/login',
      data: {
        username: data.username,
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
      url: 'http://192.168.43.186:3000/auth/register',
      data: {
        username: data.username,
        full_name: data.full_name,
        email: data.email,
        password: data.password,
        role: data.role,
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
