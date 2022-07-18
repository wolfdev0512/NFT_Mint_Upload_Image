import React, { useEffect, useState } from "react";
// import component
import { isScreenWidth } from "../../utils/getScreenWidth";
import { GiHamburgerMenu } from "react-icons/gi";
import Account from "../../components/ConnectButton/Account";
// import style
import {
  LinkGroup,
  LinkSpan,
  LogoImg,
  MenuView,
  StyledHeader,
} from "./style.header";
// import assets
import img from "../../assets/img/temp.png";

const Header = () => {
  const [mobile, setIsMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
  }, []);
  return (
    <StyledHeader>
      <LogoImg src={img} />
      <LinkGroup>
        <LinkSpan to="/">Dashboard</LinkSpan>
        <LinkSpan to="/create">Create</LinkSpan>

        <Account />
      </LinkGroup>
      {mobile && (
        <MenuView>
          <GiHamburgerMenu size={40} color="black" />
        </MenuView>
      )}
    </StyledHeader>
  );
};

export default Header;
