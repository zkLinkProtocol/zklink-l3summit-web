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
  tabData,
} from "@/components/Homepage/Agenda/data";
import Partners from "@/components/Homepage/Agenda/partners";
import dubaiBanner from "@/assets/homepage/agenda/partners/DubaiBanner/Dubai_banner.webp";
import dubaiBanner_mobile from "@/assets/homepage/agenda/partners/DubaiBanner/Dubai_banner_mobile.webp";

import Image from "next/image";
import { useResize } from "@/hooks/useResize";

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

const DubaiBanner = styled(Image)`
  max-width: 1175px;
  width: 100%;
  height: auto;

  ${(props) => props.theme.breakpoints.down("xs")} {
    width: 100%;
  }
`;

const PartnersImg = ({ size }: { size: number }) => {
  return (
    <div>
      <DubaiBanner
        priority
        src={size < 600 ? dubaiBanner_mobile : dubaiBanner}
        alt=""
      />
    </div>
  );
};

const Index = () => {
  const [tabs] = useState<Tab[]>(["Istanbul", "EthDenver", "Dubai"]);
  const [tab, setTab] = useState<Tab>(tabs[tabs.length - 1]);
  const { width } = useResize();
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
        return <PartnersImg size={width} />;
    }
  };
  return (
    <Wrap>
      <Title>AGENDA</Title>
      <TabWrap>
        {tabData.map((item) => (
          <TabItem
            key={item.tag}
            className={tab === item.tag ? "action" : ""}
            onClick={() => {
              handleClick(item.tag);
            }}
          >
            {item.text} <br /> {item.date}
          </TabItem>
        ))}
      </TabWrap>
      <Date>{`>${name(tab).name}<`}</Date>
      <Stroke data={name(tab).data} />
      <Location type={tab} />
      {partners(tab)}
    </Wrap>
  );
};

export default Index;
