import React, { FC } from "react";
import { Tab, tabData } from "@/components/Homepage/Agenda/data";
import styled from "styled-components";
import { Flex } from "@/styles";

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

interface Props {
  tab: Tab;
  click: (val: Tab) => void;
}

const Tabs: FC<Props> = ({ tab, click }) => {
  return (
    <TabWrap>
      {tabData.map((item) => (
        <TabItem
          key={item.tag}
          className={tab === item.tag ? "action" : ""}
          onClick={() => {
            click(item.tag);
          }}
        >
          {item.text} <br /> {item.date}
        </TabItem>
      ))}
    </TabWrap>
  );
};

export default Tabs;
