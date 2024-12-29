import React from 'react';

import ImageLogin from '../../assets/login-image.jpg';
import * as Styled from './styles';

export default function Login() {
  return (
    <Styled.Container>
      <Styled.Image src={ImageLogin} alt="Logo" />
      <h1>Login</h1>
    </Styled.Container>
  )
}