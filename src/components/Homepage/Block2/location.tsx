import React, { FC } from "react";
import styled from "styled-components";
import adornIcon from "@/assets/homepage/block2/adorn3.png";
import mapIcon from "@/assets/homepage/block2/map.svg";
import bg from "@/assets/homepage/block2/bg.png";
import Image from "next/image";
import { Flex, FlexCenter } from "@/styles";
import { locationData } from "./data";

const Wrap = styled.div`
  width: 872px;
  margin-top: 101px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
    margin-top: 70px;
  }
`;
const Block = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 56px;
  background: url(${bg.src}) no-repeat 100% 100% /100% 100%;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 0 10px;
  }
`;
const TextWrap = styled(FlexCenter)`
  flex-direction: column;
`;
const Text1 = styled.div`
  color: #51cfff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.6px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 16px;
  }
`;
const Text2 = styled.div`
  color: #000;
  font-size: 40px;
  font-weight: 700;

  ${(props) => props.theme.breakpoints.down("sm")} {
    font-size: 32px;
  }
`;
const Adorn = styled(Image)`
  width: 166px;
  height: auto;
`;

const Block2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const BoxLeft = styled.div`
  &.bottom {
    display: flex;
    flex-direction: column;
  }
`;
const BoxRight = styled(BoxLeft)`
  &.bottom {
    display: flex;
    flex-direction: column;
  }
`;
const Box = styled.div`
  min-height: 264px;
  margin-bottom: 24px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    min-height: inherit;
    padding: 0 13px;
  }
`;
const Title = styled.h3`
  margin-bottom: 24px;
  color: #000;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.6px;
`;
const ViewMore = styled.a`
  &.viewMore {
    margin-top: 28px;
    color: #51cfff;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.6px;
  }
`;
const P = styled.p`
  max-width: 371px;
  color: #969696;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px; /* 160% */
  letter-spacing: 0.6px;
`;
const PicIcon = styled(Image)`
  max-width: 397px;
  width: auto;
  height: 264px;
  margin-bottom: 24px;
  border-radius: 24px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    padding: 0 13px;
    width: 100%;
    height: auto;
  }
`;
const MapIcon = styled(Image)`
  width: 30px;
  height: auto;
`;

const Index: FC<{ type: string }> = ({ type }) => {
  return (
    <Wrap>
      <Block>
        <TextWrap>
          <Text1>Location</Text1>
          <Text2>Venue</Text2>
        </TextWrap>
        <Adorn src={adornIcon} alt="adorn" />
      </Block>
      <Block2>
        <BoxLeft className={"item"}>
          {locationData.map(
            (v) =>
              v.type === type &&
              v.left.map((item, idx) => (
                <Box key={idx}>
                  {item.title && <Title>{item.title}</Title>}
                  {item.text && <P>{item.text}</P>}
                  {item.url && (
                    <ViewMore
                      href={item.url}
                      target={"_blank"}
                      className={"viewMore"}
                    >
                      <MapIcon src={mapIcon} alt={"map"} /> {item.urlName}
                    </ViewMore>
                  )}
                </Box>
              ))
          )}
        </BoxLeft>
        <BoxRight className={"bottom item"}>
          {locationData.map(
            (v) =>
              v.type === type &&
              v.right.map((item, idx) => (
                <PicIcon key={idx} className={"item"} src={item} alt={"pic"} />
              ))
          )}
        </BoxRight>
      </Block2>
    </Wrap>
  );
};

export default Index;
