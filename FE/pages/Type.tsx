import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Modal from 'react-modal';
import DefaultButton from '../components/Button';
import styled from 'styled-components';
import { registUser } from '../app/api/sendData';

const componentsData = [
  { image: '/assets/images/type1.svg', type: 'A' },
  { image: '/assets/images/type2.svg', type: 'B' },
  { image: '/assets/images/type3.svg', type: 'C' },
  { image: '/assets/images/type4.svg', type: 'D' },
];

// 이전에 매번 생성되던 스타일을 상수로 선언하여 재사용
const disabledLoginBtnStyle = {
  fontSize: '24px',
  fontFamily: 'IBM Plex Sans KR, sans-serif',
  color: '#E4DDDD',
  backgroundColor: '#BFBBBB',
  marginTop: '30px',
  pointerEvents: 'none' as 'none',
};

const abledLoginBtnStyle = {
  backgroundColor: '#8071FC',
  fontFamily: 'IBM Plex Sans KR, sans-serif',
  marginTop: '30px',
  fontSize: '24px',
  cursor: 'pointer',
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
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const QuestionBox = styled.div`
  display: flex;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 50px;
  gap: 10px;
  &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const QShapedBox = styled.span`
  font-size: 20px;
  color: #8071fc;
  transition: all 0.3s ease;
`;

const QuestionBoxText = styled.span`
  font-size: 20px;
  color: #000000;
  transition: all 0.3s ease;
`;

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

const DialogContentText = styled.div`
  display: flex;
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  font-size: 14px;
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

const Component = ({ image, onClick, isSelected }) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  const selectedImage = isSelected
    ? `${image.split('.svg')[0]}_selected.svg`
    : image;

  return (
    <ComponentWrapper onClick={handleClick}>
      <Image src={selectedImage} alt="Component Image" />
    </ComponentWrapper>
  );
};

const Type = () => {
  const router = useRouter();
  const { phoneNumber } = router.query;
  const [openDialog, setOpenDialog] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState([]);

  // 선택된 컴포넌트 반환하는 로직
  const handleComponentClick = useCallback((index) => {
    setSelectedComponents((prevSelectedComponents) => {
      const updatedComponents = [...prevSelectedComponents];
      if (updatedComponents.includes(index)) {
        updatedComponents.splice(updatedComponents.indexOf(index), 1);
      } else {
        updatedComponents.push(index);
      }
      setIsChecked(updatedComponents.length > 0);
      return updatedComponents;
    });
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
  }, []);

  const onSubmit = useCallback(async () => {
    const surveyList = selectedComponents
      .sort()
      .map((index) => componentsData[index].type);
    const formData = {
      phoneNumber: phoneNumber,
      surveyList: surveyList,
    };
    const result = await registUser(formData);
    if (result.status === 200) {
      setOpenDialog(true);
    }
  }, [phoneNumber, selectedComponents]);

  return (
    <Container>
      <div>
        <Form>
          <QuestionBox>
            <QShapedBox>Q</QShapedBox>
            <QuestionBoxText>당신은 어떤 유형?</QuestionBoxText>
          </QuestionBox>
          {componentsData.map((data, index) => (
            <Component
              key={data.type}
              image={data.image}
              onClick={() => handleComponentClick(index)}
              isSelected={selectedComponents.includes(index)}
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSubmit();
              }}
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
          <DialogContent>감사합니다</DialogContent>
          <DialogContentText>제출 완료되었습니다.</DialogContentText>
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

export default Type;
