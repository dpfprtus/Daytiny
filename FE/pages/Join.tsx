import { useState } from 'react';
import Router from 'next/router';
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
  bottom: 10%;
`;
const PhoneInput = styled.input`
  width: 250px;
  height: 46px;
  font-size: 15px;
  border: 1px solid #8071fc;

  &:focus {
    border: 3px solid #00d282;
  }
`;

const ErrorMessage = styled.span`
  color: #e26f6b;
  font-size: 12px;
  margin-top: 3px;
`;

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [error, setError] = useState('');
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberRegex = /^(01[0-9]{8,9})$/;
    const value = e.target.value;
    setPhoneNumber(value);

    if (!phoneNumberRegex.test(value)) {
      setError('제대로 된 핸드폰 번호를 입력해주세요.');
      setIsPhoneNumber(false);
    } else {
      setError('');
      setIsPhoneNumber(true);
    }
  };

  const handlePreventEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 동작인 폼 제출 방지
    }
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
              onKeyDown={handlePreventEnter}
            />
            <br />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </label>
          <br />
          <br />
          <Checkbox
            label={' 이용 약관 동의합니다.'}
            isChecked={isChecked}
            onClick={handleCheckboxChange}
          />
          <br />
          {isChecked && isPhoneNumber ? (
            <DefaultButton
              styleOverrides={abledLoginBtnStyle}
              label={'사전예약하기'}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Router.push({
                  pathname: '/Type',
                  query: { phoneNumber },
                });
              }}
            />
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
};

export default Home;
