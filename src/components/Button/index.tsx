import * as Styled from './styles';

type InputProps = {
  type: "primary" | "secondary";
  title: string;
  onClick?: () => void;
}

export function Button({ type = "primary", title, onClick }: InputProps) {
  return (
    <Styled.Button type={type} onClick={onClick}>
      {title}
    </Styled.Button>
  )
}