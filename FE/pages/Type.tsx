import { useState } from 'react';
import { withRouter } from 'next/router';
import DefaultButton from '../components/Button';
import styled from 'styled-components';

const componentsData = [
  { image: '/assets/images/type1.svg', text: 'Text 1' },
  { image: '/assets/images/type2.svg', text: 'Text 2' },
  { image: '/assets/images/type3.svg', text: 'Text 3' },
  { image: '/assets/images/type4.svg', text: 'Text 4' },
];

const disabledLoginBtnStyle = {
  fontSize: '24px',
  color: '#E4DDDD',
  backgroundColor: '#BFBBBB',
  pointerEvents: 'none' as 'none',
};

const abledLoginBtnStyle = {
  backgroundColor: '#8071FC',
  fontSize: '24px',
};

const Container = styled.div`
  display: flex;
  height: 650px;
  background-image: url('/assets/images/bg.svg');
  background-size: 380px 660px;
  text-align: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  width: 294px;
  position: absolute;
  right: 8%;
  bottom: 15%;
`;
const ComponentWrapper = styled.div`
  display: inline-block;
  width: 145px;
  height: 170px;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: #8071fc;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.p`
  text-align: center;
`;

const Component = ({ image, text, onClick, isSelected }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <ComponentWrapper
      style={{ borderColor: isSelected ? '#8071FC' : 'transparent' }}
      onClick={handleClick}
    >
      <Image src={image} alt="Component Image" />
      {/* <Text>{text}</Text> */}
    </ComponentWrapper>
  );
};

const Type = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (index) => {
    setSelectedComponent(index);
  };

  return (
    <Container>
      <div>
        <Form>
          {componentsData.map((data, index) => (
            <Component
              key={index}
              image={data.image}
              text={data.text}
              onClick={() => handleComponentClick(index)}
              isSelected={selectedComponent === index}
            />
          ))}
          {!isChecked ? (
            <DefaultButton
              styleOverrides={disabledLoginBtnStyle}
              label={'제출하기'}
            />
          ) : (
            <DefaultButton
              styleOverrides={abledLoginBtnStyle}
              label={'제출하기'}
            />
          )}
        </Form>
      </div>
    </Container>
  );
};

export default withRouter(Type);
