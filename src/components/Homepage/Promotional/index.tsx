import React from "react";
import styled from "styled-components";
import { FlexCenter } from "@/styles";

const Wrap = styled(FlexCenter)`
  position: relative;
  margin: -80px auto 20px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-top: -20px;
  }
`;

const Video = styled.video`
  width: 970px;
  height: auto;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 100%;
  }
`;

const Index = () => {
  return (
    <Wrap>
      <Video controls={true} autoPlay muted loop preload="auto" playsInline>
        <source src="/video/video.mp4" type="video/mp4" />
      </Video>
    </Wrap>
  );
};

export default Index;
