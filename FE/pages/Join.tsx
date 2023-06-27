import { useCallback, useState } from 'react';
import Router from 'next/router';
import Modal from 'react-modal';
import DefaultButton from '../components/Button';
import styled from 'styled-components';
import Checkbox from '../components/CheckBox';
import { registPhone } from '../app/api/sendData';

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

const customModalStyles = {
  content: {
    position: 'absolute',
    width: '100%',
    top: '45%',
    left: '50%',
    padding: 0,
    transform: 'translate(-50%, -50%)',
    maxWidth: '290px',
    maxHeight: '290px',
    overflow: 'auto',
    borderRadius: '30px',
  },
  overlay: {
    backgroundColor: 'rgba(63, 63, 64, 0.5)',
  },
};

const DialogImg = styled.img`
  width: 100%;
`;

const DialogContent = styled.div`
  display: flex;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 10px;
`;

const DialogConfirmButton = styled.button`
  display: flex;
  background-color: transparent;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 16px;
  width: 280px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 7px;
  border: none;
  transition: all 0.3s ease;
  &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
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

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const handlePreventEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // 기본 동작인 폼 제출 방지
    }
  };

  const onSubmit = async () => {
    const formData = {
      phoneNumber: phoneNumber,
    };
    try {
      const result = await registPhone(formData);
      if (result.status === 200) {
        Router.push({
          pathname: '/Type',
          query: { phoneNumber },
        });
      } else {
        setOpenDialog(true);
      }
    } catch (error) {
      setOpenDialog(true);
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
                onSubmit();
              }}
            />
          ) : (
            <DefaultButton
              styleOverrides={disabledLoginBtnStyle}
              label={'사전예약하기'}
            />
          )}
        </Form>
        <Modal
          isOpen={openDialog}
          onRequestClose={handleCloseDialog}
          style={customModalStyles}
          contentLabel="Dialog"
        >
          <DialogImg src="/assets/images/dialogBg.svg" />
          <DialogContent>이미 사전 신청 하셨습니다.</DialogContent>
          <div style={{ marginTop: '20px', borderTop: '1px solid #F3F3F3' }}>
            <DialogConfirmButton
              onClick={() => {
                handleCloseDialog();
                Router.push('/');
              }}
            >
              확인
            </DialogConfirmButton>
          </div>
        </Modal>
      </div>
    </Container>
  );
};

export default Home;
