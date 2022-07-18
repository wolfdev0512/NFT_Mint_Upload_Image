import React, { useEffect } from "react";
import styled from "styled-components";
const LoadContent = styled.div`
  width: 100%;
  height: 100%;
  background: #2d2e33;
  position: fixed;
  z-index: 100;
  top: 0;
  opacity: 0.9;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Loading = (props) => {
  useEffect(() => {
    props.flag
      ? document.querySelector("body").classList.add("noScroll")
      : document.querySelector("body").classList.remove("noScroll");
  }, [props.flag]);
  return (
    props.flag && (
      <LoadContent>
        <Loader />
      </LoadContent>
    )
  );
};
