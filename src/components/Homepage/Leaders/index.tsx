import React from "react";
import styled from "styled-components";
import Image from "next/image";
import adorn from "@/assets/homepage/leaders/adorn.png";
import { Flex } from "@/styles";
import Character from "@/components/Homepage/Leaders/character";
import Marquee from "react-fast-marquee";
import { leftIcons, rightIcons } from "@/components/Homepage/Leaders/scroll";

const Wrap = styled.div`
  position: relative;
  text-align: center;
  padding: 194px 0 150px;
  background-color: #231f21;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px; /* 140% */

  &.other {
    margin: 157px 0;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    text-align: center;
    font-size: 24px;
    line-height: normal;

    &.other {
      margin: 20px 0;
    }
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

const ScrollImg = styled(Image)`
  max-height: 40px;
  width: auto;
  height: auto;
  margin: 30px;
  object-fit: cover;
  border-radius: 12px;

  ${(props) => props.theme.breakpoints.down("xs")} {
    height: 25px;
  }
`;

const Scroll = () => {
  return (
    <div style={{ margin: "40px 0" }}>
      {[1, 2].map((val) => (
        <Marquee key={val} direction={val % 2 ? "right" : "left"}>
          {(val === 1 ? leftIcons : rightIcons).map((item, idx: number) => (
            <ScrollImg priority key={idx} src={item} alt={"logo"} />
          ))}
        </Marquee>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <Wrap>
      <Title>Attendeed by Industry leaders </Title>
      <Scroll />
      <Title className={"other"}>Past Speakers</Title>
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
