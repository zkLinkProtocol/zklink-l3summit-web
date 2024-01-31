import React, { useState } from "react";
import styled from "styled-components";
import { Flex, FlexCenter } from "@/styles";
import Stroke from "@/components/Homepage/Block2/stroke";
import Location from "@/components/Homepage/Block2/location";
import { strokeList1, strokeList2 } from "@/components/Homepage/Block2/data";

type Tab = "Istanbul" | "EthDenver";

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

  ${(props) => props.theme.breakpoints.down("sm")} {
  }
`;
const TabWrap = styled(Flex)`
  margin: 50px 0 88px;
  border: 1px solid #000;
  cursor: pointer;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 23px 26px 50px;
  }
`;
const TabItem = styled.span`
  display: inline-block;
  width: 230px;
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;
  padding: 6px 24px;

  &.action {
    color: #fff;
    background-color: #231f21;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 16px;
    line-height: normal;
  }
`;

const Date = styled.div`
  margin-bottom: 48px;
  color: #000;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.6px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 20px;
  }
`;

const Index = () => {
  const [tabs] = useState<Tab[]>(["Istanbul", "EthDenver"]);
  const [tab, setTab] = useState<Tab>(tabs[1]);
  const handleClick = (value: Tab) => {
    console.log(value);
    setTab(value);
  };
  return (
    <Wrap>
      <Title>AGENDA</Title>
      <TabWrap>
        <TabItem
          className={tab === "EthDenver" ? "" : "action"}
          onClick={() => {
            handleClick("Istanbul");
          }}
        >
          Istanbul - 16.11.2023
        </TabItem>
        <TabItem
          className={tab !== "EthDenver" ? "" : "action"}
          onClick={() => {
            handleClick("EthDenver");
          }}
        >
          Denver - 02.03.2024
        </TabItem>
      </TabWrap>
      <Date>{`>${tab === "EthDenver" ? "ETHDenver" : "DevConnect"}<`}</Date>
      <Stroke data={tab === "EthDenver" ? strokeList2 : strokeList1} />
      <Location type={tab} />
    </Wrap>
  );
};

export default Index;
