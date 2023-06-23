import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg';

const WrapperBoxStyle = styled.div`
  max-width: 357px;
  width: 100%;
  @media (max-width: 500px) {
    width: 100%;
  }
  height: 660px;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export default WrapperBoxStyle;
