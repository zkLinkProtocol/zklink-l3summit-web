import React from "react";
import styled from "styled-components";
import Image from "next/image";
import bg from "@/assets/homepage/speaker/bg.png";
import { FlexCenter } from "@/styles";

const Wrap = styled(FlexCenter)`
  position: relative;
  height: 457px;
  flex-direction: column;
  background: url(${bg.src}) no-repeat 100% 100%/100% 100%;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: 350px;
  }
`;

const Title = styled.h3`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px; /* 140% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 24px;
  }
`;
const Button = styled.a`
  padding: 11px 46px;
  margin: 47px 0 56px;
  border-radius: 32px;
  background: #fff;
  color: #231f21;
  font-size: 20px;
  font-weight: 500;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 19px 38px;
  }
`;
const Desc = styled.p`
  max-width: 376px;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;
const Index = () => {
  return (
    <Wrap>
      <Title>Apply as a speaker</Title>
      <Button href={"https://forms.gle/CfMYKp7nYDTB2me97"} target={"_blank"}>
        Click here to apply
      </Button>
      <Desc>
        The speaker slots are open and more speakers will be added soon
      </Desc>
    </Wrap>
  );
};

export default Index;
