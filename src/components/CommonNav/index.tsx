import React, { memo, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import twitter from "../../assets/nav/twitter.svg";
import gallery from "../../assets/nav/gallery.svg";
import { useResize } from "@/hooks/useResize";
import Link from "next/link";

const HeaderWrap = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 96px;
  padding: 0 140px 0 147px;
  color: #000;
  transition: 0.5s background-color;

  &.isBg {
    background-color: #231f21;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 60px;
    padding: 0 16px;
    background-color: #231f21;
  }
`;
const Logo = styled(Link)``;
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
const IconItem = styled(Image)`
  height: auto;

  &.twitter {
    width: 44px;
    margin-right: 28px;
  }

  &.play {
    width: 34px;
    margin: 0 8px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 27px;
    height: 20px;
    margin-right: 8px;
  }
`;
const Button = styled(Link)`
  height: 48px;
  padding: 11px 32px;
  color: #231f21;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 24px;
  background-color: #fff;

  &.play {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    margin-left: 23px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: inherit;
    max-height: 32px;
    padding: 7.5px 13px;
    font-size: 13px;
    border-radius: 16px;
  }
`;

const Header = memo(() => {
  const { isMobile } = useResize();
  const refWrap = useRef<HTMLDivElement | null>(null);

  const listenScroll = () => {
    if (refWrap.current) {
      if (document.documentElement.scrollTop > 10) {
        refWrap.current.classList.add("isBg");
      } else {
        refWrap.current.classList.remove("isBg");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, false);
    listenScroll();
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);
  return (
    <HeaderWrap ref={refWrap}>
      <Logo href={"/"}>
        <Icon src={logo} alt={"logo"} />
      </Logo>
      <MediaWrap>
        <a href="https://twitter.com/L3_Summit" target={"_blank"}>
          <IconItem className={"twitter"} src={twitter} alt="twitter" />
        </a>
        <Button href={"https://lu.ma/L3Summit-EthCC"} target={"_blank"}>
          Join {!isMobile && "Now"}
        </Button>
        <Button className={"play"} href={"/gallery"}>
          <IconItem className={"play"} src={gallery} alt="" />
          GALLERY
        </Button>
      </MediaWrap>
    </HeaderWrap>
  );
});

export default Header;
