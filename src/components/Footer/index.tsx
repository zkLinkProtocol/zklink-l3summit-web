import React from "react";
import styled from "styled-components";
import Image from "next/image";
import bg from "@/assets/homepage/footer/bg.png";
import zklink from "@/assets/zklink.png";

import adorn from "@/assets/homepage/footer/adorn.png";
import adorn2 from "@/assets/homepage/footer/adorn2.png";

import { FlexCenter } from "@/styles";
import Link from "next/link";

const Wrap = styled(FlexCenter)`
  position: relative;
  height: 563px;
  flex-direction: column;
  background-color: #231f21;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    height: 292px;
    width: 100%;
    background: url(${bg.src}) no-repeat 100% 100% / 100% 100%;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 322px;

    &::before {
      height: 212px;
      background: url(${bg.src}) no-repeat center / cover;
    }
  }
`;

const Title = styled.h3`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px; /* 140% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    position: relative;
    z-index: 1;
    font-size: 35px;
  }
`;

const Adorn = styled(Image)`
  &.adorn1 {
    position: relative;
    z-index: 1;
    width: fit-content;
    height: auto;
    margin: 33px 68px 0;
  }

  &.adorn2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 198px;
    height: 182px;
  }

  &.adorn3 {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 288px;
    height: 157px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    &.adorn2,
    &.adorn3 {
      display: none;
    }
  }
`;
const LinkWrap = styled.div`
  display: flex;
  transform: scale(0.333);

  ${(props) => props.theme.breakpoints.down("sm")} {
    transform: scale(0.2);
  }
`;

const Index = () => {
  return (
    <Wrap>
      <Title>Hosted by</Title>
      <LinkWrap>
        <Link href={"https://zk.link/"} target={"_blank"}>
          <Adorn src={zklink} alt={"logo"} className={"adorn1"} />
        </Link>
      </LinkWrap>

      <Adorn src={adorn} alt={"adorn"} className={"adorn2"} />
      <Adorn src={adorn2} alt={"adorn"} className={"adorn3"} />
    </Wrap>
  );
};

export default Index;
