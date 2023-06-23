import { useState } from 'react';
import Link from 'next/link';
import DefaultButton from '../components/Button';
import styled from 'styled-components';
import Checkbox from '../components/CheckBox';

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
  width: auto;
  height: 650px;
  background-image: url('/assets/images/mainImage.svg');
  text-align: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  width: 294px;
  position: absolute;
  right: 8%;
  bottom: 15%;
`
const PhoneInput = styled.input`
  width: 250px;
  height: 46px;
  font-size: 15px;
  border: 1px solid #8071FC;
`

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setIsPhoneNumber(!!e.target.value);
  };

  return (
    <Container>
      <div>
        <Form>
          <label>
            <PhoneInput
              type="text"
              value={phoneNumber}
              placeholder="휴대폰 번호(-없이)를 입력해 주세요."
              onChange={handlePhoneNumberChange}
            />
          </label>
          <br /><br />
          <Checkbox
            label={' 이용 약관 동의합니다.'}
            isChecked={isChecked}
            onClick={handleCheckboxChange}
          />
          <br />
          {isChecked && isPhoneNumber ? (
            <Link href="/Type">
              <DefaultButton 
                styleOverrides={abledLoginBtnStyle}
                label={'사전예약하기'}
              />
            </Link>
            ) : (
              <DefaultButton
                styleOverrides={disabledLoginBtnStyle}
                label={'사전예약하기'}
              />
            )}
        </Form>
      </div>
    </Container>
  );
}

export default Home;
