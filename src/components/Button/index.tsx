import * as Styled from './styles';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary"; // Renomeei para `variant` para evitar conflito com o atributo `type`.
  title: string
};

export function Button({ variant = "primary", title, ...rest }: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...rest}>
      {title}
    </Styled.Button>
  );
}
