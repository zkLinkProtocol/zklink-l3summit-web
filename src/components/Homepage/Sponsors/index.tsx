import React from "react";
import styled from "styled-components";
import { FlexCenter } from "@/styles";
import pic from "@/assets/homepage/sponsors/sponsors.png";
import Image from "next/image";

const Wrap = styled(FlexCenter)`
  position: relative;
  flex-direction: column;
  background-color: #231f21;
`;
const Title = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  text-align: center;
`;

const Pic = styled(Image)`
  max-width: 1255px;
  max-height: 409px;
  width: 100%;
  height: auto;
  margin: 45px 0;
  padding: 0 10px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 30px 0 0;
  }
`;

const Index = () => {
  return (
    <Wrap>
      <Title>16.04.2024</Title>
      <Pic src={pic} alt={"logo"} priority />
    </Wrap>
  );
};

export default Index;
