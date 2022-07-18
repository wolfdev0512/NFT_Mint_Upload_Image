import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 25px;
  font-size: 18px;
`;

export const LogoImg = styled.img`
  width: 80px;
  height: 50px;
`;
export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const LinkSpan = styled(Link)``;

export const MenuView = styled.div`
  position: absolute;
  right: 10px;
`;
