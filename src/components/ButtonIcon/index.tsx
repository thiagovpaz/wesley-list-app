import { ButtonHTMLAttributes } from 'react';
import { FaFilter, FaPlus } from 'react-icons/fa';
import * as Styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  typeIcon: "add" | "filter";
};

export function ButtonIcon({ variant = "primary", typeIcon, ...rest }: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...rest}>
      {
        typeIcon === "add" ? (
          <FaPlus />
        ) : (
          <FaFilter />
        )
      }
    </Styled.Button>
  );
}
