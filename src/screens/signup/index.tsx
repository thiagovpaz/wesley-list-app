import { useState } from 'react';
import ImageLogin from '../../assets/login-image.jpg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { SignUpRequest } from '../../context/AuthProvider/utils';

export default function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSingup() {
    try {
      const response = await SignUpRequest(name, email, password);
      if (response?.id) {
        navigate("/login");
      }
    } catch (err) {
      console.log('err', err);
    }
  }

  function handleGoLogin() {
    navigate("/login");
  }

  return (
    <Styled.Container>
      <Styled.Image src={ImageLogin} alt="Logo" />
      <Styled.SectionLogin>
        <h1>Logins</h1>
        <Styled.SectionForm>
          <Input
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
          />
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
          <Styled.Section>
            <Button
              onClick={handleSingup}
              type='submit'
              variant='primary'
              title='Cadastrar-se'
            />
            <Button
              variant='secondary'
              title='Voltar'
              type='button'
              onClick={handleGoLogin}
            />
          </Styled.Section>
        </Styled.SectionForm>
      </Styled.SectionLogin>
    </Styled.Container>
  )
}