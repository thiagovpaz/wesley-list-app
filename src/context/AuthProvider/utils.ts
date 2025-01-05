import { AxiosError } from 'axios';
import { Api } from '../../services/api';
import { IUser } from "./types";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('user');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null
}

export async function LoginRequest(email: string, password: string) {

  try {
    const response = await Api.post('/login',
      JSON.stringify({ email, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    return response.data;

  } catch (err) {
    return window.alert('Email ou senha invalidos');
  }
}

export async function SignUpRequest(name: string, email: string, password: string) {

  try {
    const response = await Api.post('/user',
      JSON.stringify({ name, email, password }),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    return response.data;

  } catch (err) {
    if (err instanceof AxiosError && err?.response?.status === 500) {
      return window.alert('E-mail ja cadastrado')
    }
    window.alert(
      `Senha deve conter 
      minimo 4 caracteres 
      maximo 20 caracteres 
      minimo 1 letra caractere especial
      minimo 1 letra minuscula
      minimo 1 letra maiuscula`
    )
    return err
  }
}

export async function GetUSers(token: string) {
  try {
    const response = await Api.get('/user', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    });

    return response.data;

  } catch (err) {
    return null;
  }
}