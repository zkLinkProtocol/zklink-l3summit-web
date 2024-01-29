import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FlexCenter } from "@/styles";
import { data } from "./data";

const Wrap = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 137px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    grid-template-columns: 43% 43%;
    justify-items: center;
    justify-content: center;
    margin-top: 65px;
    width: 100%;
  }
`;
const Box = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 256px;
  height: 301px;
  color: #fff;
  transition: all 0.2s;

  &.normal:hover {
    color: #000;
    border-radius: 8px;
    background: #f2f2f2;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
    height: auto;
    transform: scale(0.7);
  }
`;

const AvatarBox = styled(FlexCenter)`
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 140px;
    height: 140px;
    color: white;
    border-radius: 50%;
    border: 3px solid #51cfff;
  }
`;
const Avatar = styled(Image)`
  width: 130px;
  height: 130px;
`;
const Name = styled.span`
  margin: 25px 0 7px;

  text-align: center;
  font-size: 26.171px;
  font-weight: 700;
  line-height: 23.854px; /* 91.149% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    line-height: normal;
  }
`;
const Span = styled.span`
  text-align: center;
  font-size: 16.357px;
  font-weight: 400;
  line-height: 23.854px; /* 145.839% */
`;
const Text = styled.span`
  width: 324px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 70px; /* 291.667% */

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin: 0 auto;
    width: 100vw;
  }
`;
const Index = () => {
  return (
    <Wrap>
      {data.map((item, index) => (
        <Box
          key={index}
          href={item.TwitterHandler}
          target={"_blank"}
          className={"normal"}
        >
          <AvatarBox>
            <Avatar src={item.Avatar} alt={"vince"} />
          </AvatarBox>
          <Name>{item.Name}</Name>
          <Span>{item.Project}</Span>
          <Span>{item.Title}</Span>
        </Box>
      ))}
    </Wrap>
  );
};

export default Index;
