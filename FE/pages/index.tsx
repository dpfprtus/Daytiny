import { useState, useEffect } from 'react';
import Router from 'next/router';
import DefaultButton from '../components/Button';
import styled from 'styled-components';
import Link from 'next/link';

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
  bottom: 13%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Type = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <div>
        <Image
          src={'/assets/images/firstPage.svg'}
          alt="FirstPage Image"
          style={{ marginTop: '20px' }}
        />
        <Form>
          {!isReady ? (
            <DefaultButton
              styleOverrides={disabledLoginBtnStyle}
              label={'다음'}
            />
          ) : (
            <DefaultButton
              styleOverrides={abledLoginBtnStyle}
              label={'다음'}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                Router.push({
                  pathname: '/Join',
                });
              }}
            />
          )}
        </Form>
      </div>
    </Container>
  );
};

export default Type;
