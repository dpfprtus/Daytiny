import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const DialogContainer = styled.div`
  font-family: 'Spoqa Han Sans Neo', sans-serif;
  position: fixed;
  bottom: 5%;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  z-index: 100;
  animation: ${slideUpAnimation} 0.5s ease-in-out;
`;

const DialogTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const DialogContent = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Dialog = ({ onClose }) => {
  const handleDialogClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <DialogContainer onClick={handleDialogClick}>
      <DialogTitle>개인정보 처리방침</DialogTitle>
      <CloseButton onClick={onClose}>X</CloseButton>
      <hr />
      <DialogContent>
        <p>본 응답 자의 개인정보를 이용하는 목적은 다음과 같습니다.</p>
        <br />
        <br />
        <ul style={{ display: 'list-item' }}>
          <li> 수집 목적 : 서비스 알림 및 인터뷰요청</li>
          <br />
          <li> 수집 항목 : 전화번호</li>
          <br />
          <li> 보유/이용기간 : 서비스 알림 제공 전까지</li>
        </ul>
        <br />
        <br />
        <p>
          동의를 거부할 권리가 있으며 동의 거부 시, 서비스 이용에 제한이 될 수
          있습니다.
        </p>
      </DialogContent>
    </DialogContainer>
  );
};

export default Dialog;
