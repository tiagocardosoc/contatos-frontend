import { isExpired } from "react-jwt";

const secret = 'KAKAKACOMMMMKKL'

export const TOKEN_KEY = "@meu-token";

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const autenticarToken = () => {
  const token = getToken();
  if (token) {
    return !isExpired(token)

  // if (token) {

  //   jwt.verify(token, secret, (erro, tokenDecodificado) => {
  //     if (erro) {
  //       return false
  //     } else {
  //       return true
  //     }
  //   });

  } else {
    return false;
  }
} 