import React from "react";
import styled from "styled-components";
import { Flex, FlexCenter } from "@/styles";
import Image from "next/image";
import bg from "../../../assets/homepage/header/banner.png";
import adorn1 from "../../../assets/homepage/header/adornLeft.svg";
import adorn2 from "../../../assets/homepage/header/adornRight.svg";
import zk from "../../../assets/zklink.png";
import qed from "../../../assets/qed.png";

const Wrap = styled(FlexCenter)`
  position: relative;
  height: 905px;
  background: url(${bg.src}) no-repeat 100% 100%/100% 100%;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 604px;
    background: url(${bg.src}) no-repeat 38% 100% / cover;
  }
`;
const InfoWrap = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 192px;
  font-weight: 700;
  line-height: 70px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 48px;
  }
`;
const Span = styled.span`
  margin-top: 98px;
  color: #fff;
  font-size: 56px;
  font-weight: 400;
  line-height: 70px; /* 125% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: 0;
    font-size: 16px;
  }
`;
const Adorn = styled(Image)`
  position: absolute;

  &.left {
    left: 0;
    bottom: 0;
    width: 208px;
    height: auto;
  }

  &.right {
    right: 0;
    bottom: 0;
    width: 311px;
    height: auto;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    &.left {
      width: 83px;
      height: auto;
    }

    &.right {
      width: 124px;
      height: auto;
    }
  }
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 104px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    flex-direction: column;
  }
`;
const Text = styled.p`
  color: #fff;
  font-size: 28.286px;
  font-weight: 700;
  line-height: 55px; /* 194.444% */
`;

const Logo = styled(Image)`
  width: auto;

  &.zk {
    height: 34.5px;
    margin: 0 31px;
  }

  &.qed {
    height: 29.8px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    &.zk {
      margin: 31px;
    }
  }
`;
const Button = styled.a`
  max-width: 308px;
  margin-top: 95px;
  padding: 14px 47px;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  border-radius: 32px;
  background-color: #51cfff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #8cd7fb;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 19px 38px;
  }
`;

const Index = () => {
  return (
    <Wrap>
      <InfoWrap>
        <IconWrap>
          <Text>Hosted by:</Text>
          <Logo src={zk} className={"zk"} alt="zk" />
        </IconWrap>
        <Title>L3 Summit</Title>
        <Span>Dubai</Span>
        <Button href={"https://forms.gle/CfMYKp7nYDTB2me97"} target={"_blank"}>
          Become A Speaker
        </Button>
      </InfoWrap>
      <Adorn src={adorn1} alt="adorn" className={"left"} />
      <Adorn src={adorn2} alt="adorn2" className={"right"} />
    </Wrap>
  );
};

export default Index;
