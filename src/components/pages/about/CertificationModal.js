import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import '../../../styles/modal.css';

const CertificationModal = ({ showModal, setShowModal }) => {
  const closeModal = (e) => {
    setShowModal(false);
  };

  return (
    <ReactModal
    overlayClassName="modal"
    className="content"
    isOpen={showModal}
    onClick={closeModal}
    appElement={document.getElementById('root') || undefined}
    >
    <ButtonWrapper>
    <StyledButton onClick={closeModal}>X</StyledButton>
  </ButtonWrapper>
    </ReactModal>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledButton = styled.button`
  font-size: 2rem;
  border: none;
  cursor: pointer;
  background: #fff;
  align-self: flex-start;
  border-radius: 50%;
  padding: 3px;

  transition: 0.2s;

  &:hover {
    color: red;
  }
`;

export default CertificationModal
