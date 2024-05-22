import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import {
  introduceData,
  introduceTitle,
  IntroduceTitle,
} from "@/components/Homepage/Map/data";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Wrap = styled.div`
  position: absolute;
  left: 11px;
  bottom: 32px;
  animation: ${fadeIn} 0.5s;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  line-height: 70px; /* 269.231% */
`;

const DescWrap = styled.div`
  position: relative;
  width: 292px;
  height: 270px;
  border: 7px solid #51cfff;
  border-left: 3px solid #51cfff;
  border-right: 0 transparent;
  border-bottom: 0 transparent;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 183px;
    height: 4px;
    background-color: #51cfff;
    clip-path: polygon(0 0, 100% 0, 100% 70px);
  }
`;

const Desc = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 163px;
  padding: 25px 0;
  background: rgba(217, 217, 217, 0.2);
  backdrop-filter: blur(12px);
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const TextL = styled.div`
  margin-right: 15px;
  color: #51cfff;
  font-size: 28px;
`;

const TextR = styled.div`
  color: #fff;
  font-size: 20px;
`;

const Index: FC<{ type: IntroduceTitle }> = ({ type }) => {
  return (
    <Wrap>
      <Title>{introduceTitle[type]}</Title>
      <DescWrap>
        <Desc>
          {introduceData[type].map((item, idx) => (
            <Text key={idx}>
              <TextL>{item.textL}</TextL>
              <TextR>{item.textR}</TextR>
            </Text>
          ))}
        </Desc>
      </DescWrap>
    </Wrap>
  );
};

export default Index;
