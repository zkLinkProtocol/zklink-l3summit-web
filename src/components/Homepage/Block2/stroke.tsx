import React from "react";
import styled from "styled-components";
import adorn from "@/assets/homepage/block2/adorn.png";
import adorn2 from "@/assets/homepage/block2/adorn2.png";
import { StrokeItem } from "@/components/Homepage/Block2/data";

const Wrap = styled.div`
  display: grid;
  row-gap: 16px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 10px;
  }
`;
const Box = styled.div`
  position: relative;
  width: 670px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;
const Time = styled.div`
  position: absolute;
  left: -100px;
  top: 0;
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    position: initial;
    font-size: 16px;
    margin-left: 32px;
  }
`;
const Info = styled.div`
  position: relative;
  width: inherit;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #777;
  color: #fff;

  &.bgBlack,
  &.bgBlue,
  &.bgOrange,
  &.bgGrey {
    border: none;
  }

  &.bgBlack {
    background-color: #231f21;
  }

  &.bgBlue {
    background-color: #51cfff;
  }

  &.bgOrange {
    background-color: #ff8446;
  }

  &.bgGrey {
    background-color: #c4d0d5;
  }

  &.adorn1::before {
    position: absolute;
    top: 0;
    right: 0;
    content: "";
    height: 74px;
    width: 144.5px;
    background: url(${adorn.src}) no-repeat 100% 100% /100% 100%;
  }

  &.adorn2::before {
    position: absolute;
    top: 24px;
    right: 40px;
    content: "";
    height: 90px;
    width: 84px;
    background: url(${adorn2.src}) no-repeat 100% 100% /100% 100%;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 24px 20px;
  }
`;
const InfoTop = styled.div`
  color: #494949;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.6px;

  &.panel {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 24px;
    background: #ecf0f1;
  }
`;
const InfoCenter = styled.div`
  max-width: 587px;
  margin: 8px 0;
  color: #000;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.166px;

  &.colorWhite {
    color: #fff;
    margin: 0;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 310px;
    font-weight: 700;
  }
`;

const InfoBottomWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoBottom = styled.div`
  color: #494949;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.166px;
`;

const Index = ({ data }: { data: StrokeItem[] }) => {
  return (
    <Wrap>
      {data.map((item) => (
        <Box key={item.time}>
          <Time>{item.time}</Time>
          <Info className={item.infoClass || ""}>
            {item.infoTopText ? (
              <InfoTop className={item.infoTopClass || ""}>
                {item.infoTopText}
              </InfoTop>
            ) : null}
            {item.infoCenterText ? (
              <InfoCenter className={item.infoCenterClass || ""}>
                {item.infoCenterText}
              </InfoCenter>
            ) : null}
            {(item.infoBottomLText || item.infoBottomRText) && (
              <InfoBottomWrap>
                {item.infoBottomLText ? (
                  <InfoBottom> {item.infoBottomLText}</InfoBottom>
                ) : null}
                {item.infoBottomRText ? (
                  <InfoBottom> {item.infoBottomRText}</InfoBottom>
                ) : null}
              </InfoBottomWrap>
            )}
          </Info>
        </Box>
      ))}
    </Wrap>
  );
};

export default Index;
