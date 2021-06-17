import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ component: Component, ...rest }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => setModalIsOpen(false);

  return (
    modalIsOpen && (
      <ModalContainer onClick={closeModal}>
        <ModalButton onClick={closeModal}>X</ModalButton>

        <Component
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          {...rest}
        />
      </ModalContainer>
    )
  );
};
export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #161b25e6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
`;

const ModalButton = styled.button`
  color: gray;
  border: none;
  border-radius: 1px;
  font-weight: 600;
  font-size: 20px;
  padding: 10px 24px;
  margin: 1rem;
  cursor: pointer;
  background-color: white;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
`;

// const ModalContent = styled.div`
//   width: 50%;
//   height: 50%;
//   background-color: rgba(0, 0, 0, 1);
// `;
