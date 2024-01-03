import Router from 'next/router';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const getAuth = () => cookies.get('AUTH');

const setAuth = (value) => cookies.set('AUTH', value, { path: '/' });

const removeAuth = (value) => cookies.remove('AUTH', { path: '/' });

const isAuthenticated = () => {
    const auth = getAuth();
    return auth != null && auth.token;
};

const logout = () => {
    removeAuth();
    Router.push('/');
};

export {
    getAuth, isAuthenticated, logout, removeAuth, setAuth
};
