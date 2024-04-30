import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "@/styles";
import Tabs from "@/components/Homepage/Agenda/tabs";
import { Tab } from "@/components/Homepage/Agenda/data";
import Video from "@/components/Gallery/video";
import Photo from "@/components/Gallery/photos";

const Wrap = styled(FlexCenter)`
  position: relative;
  flex-direction: column;
  margin: 120px 0 184px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 64px 0 75px;
  }
`;
const Title = styled.h3`
  position: relative;
  color: #000;
  font-size: 50px;
  font-weight: 700;
  line-height: 70px; /* 140% */

  &::before {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    content: "";
    width: 265px;
    height: 25px;
    background: #51cfff;
  }
`;

const Index = () => {
  const [tabs] = useState<Tab[]>(["Istanbul", "EthDenver", "Dubai"]);
  const [tab, setTab] = useState<Tab>(tabs[tabs.length - 1]);
  const handleClick = (value: Tab) => {
    setTab(value);
  };
  return (
    <Wrap>
      <Title>GALLERY </Title>
      <Tabs tab={tab} click={handleClick} />
      <Video type={tab} />
      <Photo type={tab} />
    </Wrap>
  );
};

export default Index;
