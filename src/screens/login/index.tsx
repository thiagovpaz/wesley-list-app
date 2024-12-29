import ImageLogin from '../../assets/login-image.jpg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as Styled from './styles';

export default function Login() {
  return (
    <Styled.Container>
      <Styled.Image src={ImageLogin} alt="Logo" />
      <Styled.SectionLogin>
        <h1>Login</h1>
        <form>
          <Styled.SectionForm>
            <Styled.Section>
              <Input type="text" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
            </Styled.Section>
            <Styled.Section>
              <Button type='primary' title='Entrar' />
              <Button type='secondary' title='Cadastrar-se' />
            </Styled.Section>
          </Styled.SectionForm>
        </form>
      </Styled.SectionLogin>
    </Styled.Container>
  )
}