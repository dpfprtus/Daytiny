import { Colors } from '../../style/GlobalColors';
import styled, { CSSProperties } from 'styled-components';

export const DefaultButtonStyle = styled.button<{
  styleOverrides?: CSSProperties;
}>`
  position: relative;
  display: flex;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  align-items: center;
  justify-content: center;
  width: 294px;
  height: 60px;
  border-radius: 12px;
  color: ${Colors.bgColor};
  background-color: #8071fc;
  ${({ styleOverrides }) => ({ ...styleOverrides })};
`;
