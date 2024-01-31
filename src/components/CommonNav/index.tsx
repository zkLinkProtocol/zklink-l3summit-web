import React, { memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import twitter from "../../assets/homepage/header/twitter.svg";
import { useResize } from "@/hooks/useResize";

const HeaderWrap = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  padding: 0 140px 0 147px;
  color: #000;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 60px;
    padding: 0 16px;
    background-color: #231f21;
  }
`;
const Logo = styled.h1``;
const Icon = styled(Image)`
  width: 222px;
  max-height: 47px;
  height: auto;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 113px;
    height: 24px;
  }
`;
const MediaWrap = styled.div`
  display: flex;
  align-items: center;
`;
const TwitterIcon = styled(Image)`
  width: 44px;
  height: 32px;
  margin-right: 28px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 27px;
    height: 20px;
    margin-right: 8px;
  }
`;
const Button = styled.a`
  width: 152px;
  height: 48px;
  padding: 11px 32px;
  color: #231f21;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 24px;
  background-color: #fff;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: inherit;
    max-height: 32px;
    padding: 7.5px 13px;
    font-size: 13px;
    border-radius: 16px;
  }
`;

const Header = memo(() => {
  const isMobile = useResize();
  return (
    <HeaderWrap>
      <Logo>
        <Icon src={logo} alt={"logo"} />
      </Logo>
      <MediaWrap>
        <a href="https://twitter.com/L3_Summit" target={"_blank"}>
          <TwitterIcon src={twitter} alt="twitter" />
        </a>
        <Button
          href={"https://lu.ma/event/evt-Um0L9kcRnLHolzz"}
          target={"_blank"}
          data-luma-action="checkout"
          data-luma-event-id="evt-Um0L9kcRnLHolzz"
        >
          Join {!isMobile && "Now"}
        </Button>
      </MediaWrap>
    </HeaderWrap>
  );
});

export default Header;
