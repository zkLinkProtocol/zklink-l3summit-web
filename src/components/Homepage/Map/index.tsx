import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import mapBg from "@/assets/homepage/map/map.png";
import dotIcon from "@/assets/homepage/map/whitepoint.png";
import plane from "@/assets/homepage/map/plane.png";
import Introduce from "./introduce";
import { IntroduceTitle, locations } from "@/components/Homepage/Map/data";
import Place from "./place";
import { FlexCenter } from "@/styles";

const Opacity = keyframes`
    from {
        opacity: 0.8;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 137px;
  background-color: #231f21;
`;

const MapWrap = styled.div`
  position: relative;
  top: 254px;
  left: 50%;
  transform: translateX(-50%);
  width: 1238px;
  height: 583px;
  background: url(${mapBg.src}) no-repeat 100% /100%;

  ${(props) => props.theme.breakpoints.down("sm")} {
    top: 100px;
    transform: translateX(-50%) scale(0.7);
  }

  ${(props) => props.theme.breakpoints.down("xs")} {
    top: 0;
    transform: translateX(-50%) scale(0.4);
  }
`;

const InfoWrap = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;

  &.istanbul {
    top: 222px;
    left: 704px;
  }

  &.denver {
    top: 214px;
    left: 191px;
  }

  &.dubai {
    top: 285px;
    left: 789px;
  }

  &.brussels {
    top: 194px;
    left: 600px;
    animation: 1.2s linear 0s infinite alternate none running ${Opacity};
  }

  &.plane {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 222px;
    left: 703px;
  }
`;

const Plane = styled(FlexCenter)`
  min-width: 44px;
  min-height: 44px;
  opacity: 0.8;
  transition: opacity 0.5s;

  &.bg {
    background-color: #51cfff;
    border-radius: 50%;
    opacity: 1;
  }
`;

const Dot = styled(Image)`
  position: relative;
  width: 24px;
  height: 24px;

  &.plane {
    width: 28px;
    height: 28px;
  }
`;

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [name, setName] = useState<IntroduceTitle>("EthDenver");

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentLocation(
          (prevLocation) => (prevLocation + 1) % locations.length
        );
        setIsAnimating(true);
        setName(
          () =>
            locations[currentLocation + (1 % locations.length)]?.name ||
            locations[0]?.name
        );
      }, 3000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAnimating]);

  const lo = locations[currentLocation];
  return (
    <Wrap>
      <MapWrap>
        <InfoWrap className={"denver"}>
          <Dot src={dotIcon} alt={""} />
        </InfoWrap>
        <InfoWrap className={"istanbul"}>
          <Dot src={dotIcon} alt={""} />
        </InfoWrap>
        <InfoWrap className={"dubai"}>
          <Dot src={dotIcon} alt={""} />
        </InfoWrap>
        <InfoWrap className={"brussels"}>
          <Dot src={dotIcon} alt={""} />
        </InfoWrap>
        <InfoWrap
          style={{
            transform: `translate(${lo.x}px, ${lo.y}px)`,
            transition: "transform 2s",
          }}
          className={"plane"}
        >
          <Plane className={!isAnimating && lo.name === name ? "bg" : ""}>
            <Dot
              style={{
                transform: `rotate(${isAnimating ? lo.rotate : 0}deg)`,
              }}
              className={"plane"}
              src={plane}
              alt={""}
            />
          </Plane>
          {!isAnimating && lo.name === name && <Introduce type={lo.name} />}
        </InfoWrap>
      </MapWrap>
      <Place />
    </Wrap>
  );
};

export default Index;
