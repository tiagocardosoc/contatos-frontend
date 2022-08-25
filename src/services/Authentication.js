import { isExpired } from "react-jwt";
import Cookies from "universal-cookie";

const secret = 'KAKAKACOMMMMKKL'

export const TOKEN_KEY = "authToken";

// export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getToken = () => {
  // localStorage.getItem(TOKEN_KEY)
  const cookie = new Cookies(); 
  return cookie.get(TOKEN_KEY)
};

export const setToken = token => {
  // localStorage.setItem(TOKEN_KEY, token);
  const cookie = new Cookies();
  cookie.set(TOKEN_KEY, token);
};

export const logout = () => {
  // localStorage.removeItem(TOKEN_KEY);
  const cookie = new Cookies();
  cookie.remove(TOKEN_KEY);
};

export const autenticarToken = () => {
  const token = getToken();
  if (token) {
    return !isExpired(token)
  } else {
    return false;
  }
} 