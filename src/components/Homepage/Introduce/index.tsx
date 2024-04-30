import React from "react";
import styled from "styled-components";
import bg from "@/assets/homepage/introduce/bg.png";
import { Flex, FlexBetween, FlexCenter } from "@/styles";

const Wrap = styled(FlexCenter)`
  position: relative;
  height: 837px;
  background: url(${bg.src}) no-repeat 100% 100%/100% 100%;

  ${(props) => props.theme.breakpoints.down("sm")} {
    height: inherit;
    padding-bottom: 55px;
    background: url(${bg.src}) no-repeat center / cover;
  }
`;
const Time = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;

  ${(props) => props.theme.breakpoints.down("sm")} {
  }
`;
const InfoWrap = styled(FlexBetween)`
  width: 1264px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: inherit;
    flex-direction: column;
  }
`;
const TextWrap = styled.div`
  display: grid;
  row-gap: 40px;
  max-width: 619px;

  &.left {
    max-width: 500px;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 289px;

    &.left {
      margin-top: 140px;
      max-width: 289px;
    }
  }
`;

const Span = styled.span`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;

const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 300;
  line-height: 32px;
  letter-spacing: 1px;

  &.leftTextTop,
  &.leftText {
    font-weight: 700;
  }

  &.leftText {
    font-style: italic;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 16px;
    color: #000;
    letter-spacing: 0.6px;
  }
`;

const Index = () => {
  return (
    <Wrap>
      <Time>July 2024</Time>
      <InfoWrap>
        <TextWrap className={"left"}>
          <Text className={"leftTextTop"}>
            The Leading Technical Forum Exploring Layer 3 Blockchain Solutions.
          </Text>
          <Text className={"leftText"}>
            For Layer 3 Developers, Founders, and Layer 1&2 Scaling Enthusiasts.
          </Text>
        </TextWrap>
        <TextWrap>
          <Text>
            <Span>L3 Summit </Span> is a zkLink-initiated event series that
            educates, amplifies, and shares research about the current status of
            Layer 3 development from the world's leading Layer 1 and Layer 2
            blockchain protocols.
          </Text>
          <Text>
            Layer 3s are third layers built on top of Ethereum Layer 2 Rollups
            that deliver higher scalability, lower gas costs, and greater
            app-specific customizability. Layer 3s are poised to be the future
            of building interoperable dApp infrastructures and Ethereum scaling
            solutions.
          </Text>
          <Text>
            The L3 Summit brings together the world's best protocols such as
            zkSync, Starknet, Scroll, Linea, Polygon, Manta, Mantle, Kakarot,
            Taiko, Celestia, Eigen Layer, and more, to push forward the
            boundaries of Layer 3 innovation and break through the blockchain
            trilemma.
          </Text>
        </TextWrap>
      </InfoWrap>
    </Wrap>
  );
};

export default Index;
