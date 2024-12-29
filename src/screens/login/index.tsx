import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImageLogin from '../../assets/login-image.jpg';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../context/AuthProvider/useAuth';

import * as Styled from './styles';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleLogin() {
    try {
      const response = await auth.authenticate(email, password);
      if (response === undefined) {
        navigate("/home");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleGoSignUp() {
    navigate("/signup");
  }

  return (
    <Styled.Container>
      <Styled.Image src={ImageLogin} alt="Logo" />
      <Styled.SectionLogin>
        <h1>Logins</h1>
        <Styled.FormLogin onSubmit={(e) => { handleLogin(); e.preventDefault(); }}>
          <Styled.SectionForm>
            <Styled.Section>
              <Input
                type="text"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Styled.Section>
            <Styled.Section>
              <Button
                variant='primary'
                title='Entrar'
              />
              <Button
                variant='secondary'
                title='Cadastrar-se'
                type='button'
                onClick={handleGoSignUp}
              />
            </Styled.Section>
          </Styled.SectionForm>
        </Styled.FormLogin>
      </Styled.SectionLogin>
    </Styled.Container>
  )
}