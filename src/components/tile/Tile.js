import React from "react";
import withModal from "../modal/withModal";
import Modal from "../modal/Modal";
import styled from "styled-components";

const Tile = ({ name, modalIsOpen, setModalIsOpen }) => {
  console.log(modalIsOpen);

  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("Clicked...");
  };
  return <TileContainer onClick={onClickHandler}>{name}</TileContainer>;
};

export default withModal(Modal)(Tile);

const TileContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: white;
`;
