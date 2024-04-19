import React from "react";
import styled from "styled-components";
import { FlexCenter } from "@/styles";
import pic from "@/assets/homepage/sponsors/sponsors.png";
import picSmall from "@/assets/homepage/sponsors/sponsorsSmall.png";

import Image from "next/image";
import { useResize } from "@/hooks/useResize";

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
    max-height: max-content;
    margin: 30px 0 0;
  }
`;

const Index = () => {
  const { width } = useResize();
  return (
    <Wrap>
      <Title>16.04.2024</Title>
      <Pic src={width < 590 ? picSmall : pic} alt={"logo"} priority />
    </Wrap>
  );
};

export default Index;
