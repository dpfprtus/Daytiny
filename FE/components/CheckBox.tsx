import React, { useState } from 'react';
import styled from 'styled-components';
import Dialog from './Dialog';

const StyledInput = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.25rem;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-image: url('/assets/icons/unchecked.svg');
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:checked:before {
    background-image: url('/assets/icons/checked.svg');
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const StyledImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

function Checkbox(props) {
  const { isChecked, label, onClick } = props;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAgreeClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleCheckboxChange = () => {
    onClick(!isChecked);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <StyledLabel>
      <StyledInput
        type="checkbox"
        checked={isChecked}
        id={label}
        onChange={handleCheckboxChange}
      />
      <StyledP>{label}</StyledP>
      <StyledImage
        src="/assets/icons/agreeArrow.svg"
        alt="Agree Details"
        onClick={handleAgreeClick}
      />
      {isDialogOpen && <Dialog onClose={handleCloseDialog} />}
    </StyledLabel>
  );
}

export default Checkbox;
