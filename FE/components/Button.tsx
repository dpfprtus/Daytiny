import { CSSProperties } from 'styled-components';
import { DefaultButtonStyle } from './layout/ButtonStyle';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  label: string;
  icon?: ReactNode;
  styleOverrides?: CSSProperties;
}

const DefaultButton = ({
  label,
  icon,
  styleOverrides,
  ...rest
}: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButtonStyle styleOverrides={styleOverrides} {...rest}>
      {icon && icon}
      <div>
        <p>{label}</p>
      </div>
    </DefaultButtonStyle>
  );
};
export default DefaultButton;
