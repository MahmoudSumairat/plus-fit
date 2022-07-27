import { LOGIN, LOGOUT } from "../actions/auth";

const login = ({payload}) => ({type : LOGIN, payload});

const logout = () => ({type : LOGOUT});


export {login, logout}