import * as Styled from './styles';
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ type = "text", placeholder, ...rest }: InputProps) {
  return (
    <Styled.Input type={type} placeholder={placeholder} {...rest} />
  );
}
