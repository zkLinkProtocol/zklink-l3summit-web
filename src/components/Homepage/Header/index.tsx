import React from "react";
import styled from "styled-components";
import { Flex, FlexCenter } from "@/styles";
import Image from "next/image";
import bg from "../../../assets/homepage/header/banner.png";
import adorn1 from "../../../assets/homepage/header/adornLeft.svg";
import adorn2 from "../../../assets/homepage/header/adornRight.svg";

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
  text-align: center;
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
  margin-top: 74px;
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
    height: 208px;
  }

  &.right {
    right: 0;
    bottom: 0;
    width: 311px;
    height: 265px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    &.left {
      width: 83px;
      height: 83px;
    }

    &.right {
      width: 124px;
      height: 106px;
    }
  }
`;
const Index = () => {
  return (
    <Wrap>
      <InfoWrap>
        <Title>L3 Summit</Title>
        <Span>Denver</Span>
      </InfoWrap>
      <Adorn src={adorn1} alt="adorn" className={"left"} />
      <Adorn src={adorn2} alt="adorn2" className={"right"} />
    </Wrap>
  );
};

export default Index;
