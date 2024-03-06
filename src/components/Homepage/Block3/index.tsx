import React from "react";
import styled from "styled-components";
import Image from "next/image";
import dappPicg from "@/assets/homepage/block3/banner.png";
import adorn from "@/assets/homepage/block3/adorn.png";
import { Flex } from "@/styles";
import Character from "@/components/Homepage/Block3/character";

const Wrap = styled(Flex)`
  position: relative;
  align-items: center;
  flex-direction: column;
  padding: 194px 0 150px;
  background-color: #231f21;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px; /* 140% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 260px;
    text-align: center;
    font-size: 24px;
    line-height: normal;
  }
`;

const DappPic = styled(Image)`
  max-width: 1266px;
  max-height: 536px;
  width: 100%;
  height: auto;
  margin: 102px 0 272px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 313px;
    max-height: 132px;
    margin: 48px 0 69px;
  }
`;
const Adorn = styled(Image)`
  position: absolute;
  width: 216px;
  height: 234px;

  &.left,
  &.right {
    top: 112px;
  }

  &.left2,
  &.right2 {
    top: 1833px;
  }

  &.left,
  &.left2 {
    left: -35px;
  }

  &.right,
  &.right2 {
    right: -38px;
    transform: rotate(90deg);
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`;
const P = styled.p`
  margin-top: 100px;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  color: #fff;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: 30px;
    font-size: 20px;
  }
`;

const Index = () => {
  return (
    <Wrap>
      <Title>Attendeed by Industry leaders </Title>
      <DappPic src={dappPicg} alt={"dapp"} />
      <Title>Past Speakers</Title>
      <Character />
      <P>More speakers coming soon !</P>

      <Adorn src={adorn} alt={"adorn"} className={"left"} />
      <Adorn src={adorn} alt={"adorn"} className={"right"} />
      <Adorn src={adorn} alt={"adorn"} className={"left2"} />
      <Adorn src={adorn} alt={"adorn"} className={"right2"} />
    </Wrap>
  );
};

export default Index;
