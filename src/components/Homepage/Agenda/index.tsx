import React, { useState } from "react";
import styled from "styled-components";
import { Flex, FlexCenter } from "@/styles";
import Stroke from "@/components/Homepage/Agenda/stroke";
import Location from "@/components/Homepage/Agenda/location";
import {
  partnerDubai,
  partnerEthDenver,
  strokeList1,
  strokeList2,
  strokeList3,
} from "@/components/Homepage/Agenda/data";
import Partners from "@/components/Homepage/Agenda/partners";

type Tab = "Istanbul" | "EthDenver" | "Dubai";

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
  const [tabs] = useState<Tab[]>(["Istanbul", "EthDenver", "Dubai"]);
  const [tab, setTab] = useState<Tab>(tabs[tabs.length - 1]);
  const handleClick = (value: Tab) => {
    setTab(value);
  };
  const name = (val: Tab) => {
    switch (val) {
      case "EthDenver":
        return { name: "ETHDenver", data: strokeList2 };
      case "Istanbul":
        return { name: "DevConnect", data: strokeList1 };
      case "Dubai":
        return { name: "Dubai", data: strokeList3 };
    }
  };
  const partners = (val: Tab) => {
    switch (val) {
      case "EthDenver":
        return <Partners data={partnerEthDenver} />;
      case "Istanbul":
        return null;
      case "Dubai":
        return <Partners data={partnerDubai} />;
    }
  };
  return (
    <Wrap>
      <Title>AGENDA</Title>
      <TabWrap>
        <TabItem
          className={tab === "Istanbul" ? "action" : ""}
          onClick={() => {
            handleClick("Istanbul");
          }}
        >
          Istanbul <br /> 16.11.2023
        </TabItem>
        <TabItem
          className={tab === "EthDenver" ? "action" : ""}
          onClick={() => {
            handleClick("EthDenver");
          }}
        >
          Denver <br /> 02.03.2024
        </TabItem>
        <TabItem
          className={tab === "Dubai" ? "action" : ""}
          onClick={() => {
            handleClick("Dubai");
          }}
        >
          Dubai <br /> 16.04.2024
        </TabItem>
      </TabWrap>
      <Date>{`>${name(tab).name}<`}</Date>
      <Stroke data={name(tab).data} />
      <Location type={tab} />
      {partners(tab)}
    </Wrap>
  );
};

export default Index;
