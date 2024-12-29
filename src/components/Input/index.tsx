import * as Styled from './styles';

type InputProps = {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <Styled.Input type={type} placeholder={placeholder} />
  )
}