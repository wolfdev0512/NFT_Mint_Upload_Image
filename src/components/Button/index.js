import React from "react";
import styled from "styled-components";
const StyledButton = styled.div`
  color: white;
  background-color: #3f53d9;
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;
const Button = (props) => {
  return (
    <StyledButton onClick={() => props.onClick()} style={props.style}>
      {props.children}
    </StyledButton>
  );
};
export default Button;
