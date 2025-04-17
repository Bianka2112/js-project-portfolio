import styled, { css } from "styled-components"

export const Button = styled.button`
  border-radius: 12px;
  border: 2px solid black;
  background: transparent;
  display: flex;
  width: 303px;
  height: 48px;
  padding: 0px 16px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;

${props => props.$primary && css`
   background: #000;
   color: white;
`}
`