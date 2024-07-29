import React, { FC } from "react";
import styled from "styled-components";
import { FlexCenter } from "@/styles";
import { Tab } from "@/components/Homepage/Agenda/data";

const Wrap = styled(FlexCenter)`
  position: relative;
  margin: 0px auto 20px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: -20px;
  }
`;

const Video = styled.video`
  width: 969px;
  height: auto;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;

const istanbul = "/gallery/istanbul.mp4";
const ethDenver = "/gallery/denver.mp4";
const dubai = "/gallery/dubai.mp4";
const brussels = "/gallery/brussels.mp4";

const Index: FC<{ type: Tab }> = ({ type }) => {
  const videoSource =
    type === "Istanbul"
      ? istanbul
      : type === "EthDenver"
      ? ethDenver
      : type === "Dubai"
      ? dubai
      : brussels;
  return (
    videoSource && (
      <Wrap>
        <Video
          controls={true}
          autoPlay
          muted
          loop
          preload="auto"
          playsInline
          key={type}
        >
          <source src={videoSource} type="video/mp4" />
        </Video>
      </Wrap>
    )
  );
};

export default Index;
