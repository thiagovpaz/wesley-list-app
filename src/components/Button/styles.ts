import styled from "styled-components";

import { colors } from "../../global/colors";

export const Button = styled.button<{ variant: "primary" | "secondary" }>`
  border: none;
  outline: none;
  padding: 8px 12px; 
  font-size: 16px; 
  width: 100%;
  color: ${({ variant }) => variant === "primary" ? colors.green.soft : colors.gray[600]};
  background-color: ${({ variant }) => variant === "primary" ? colors.green.light : colors.gray[100]}; 
  border-radius: 4px; 
`;