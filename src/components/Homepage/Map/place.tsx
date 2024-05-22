import React from "react";
import styled from "styled-components";
import Image from "next/image";
import plane from "@/assets/homepage/map/plane-silhouette.png";
import view from "@/assets/homepage/map/view.png";
import { IntroduceTitle, placeData } from "@/components/Homepage/Map/data";
import { useRouter } from "next/router";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1272px;
  margin: 318px auto 0;

  ${(props) => props.theme.breakpoints.down("sm")} {
    max-width: 327px;
    margin-top: 50px;
    grid-template-columns: 1fr;
  }

  ${(props) => props.theme.breakpoints.down("xs")} {
    margin-top: -50px;
  }
`;
const TextWrap = styled.div`
  position: relative;
  height: 100%;
  padding: 16px 0 0 24px;
`;
const View = styled(Image)`
  display: none;
  position: absolute;
  top: -189px;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: 189px;
  padding-bottom: 12px;
  cursor: pointer;
`;
const Info = styled.div`
  position: relative;
  min-height: 140px;
  padding: 0 8px;
  border: 2px solid #fff;

  &:hover ${View} {
    display: block;
  }

  &:hover ${TextWrap} {
    background-color: #51cfff;
  }

  &:hover ${TextWrap}::before {
    content: "";
    position: absolute;
    right: 13px;
    bottom: 5px;
    width: 44px;
    height: 44px;
    background: url(${plane.src}) no-repeat 100% /100%;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    border-top: 0 transparent;
    border-right: 0 transparent;
  }

  ${(props) => props.theme.breakpoints.down("sm")} {
    border-right: 0 transparent;
    border-bottom: 0 transparent;
  }
`;

const Text = styled.div`
  color: #fff;
  font-weight: 500;

  &.top {
    font-size: 20px;
  }

  &.center {
    margin: 8px 0 13px;
    font-size: 26px;
    font-weight: 700;
  }

  &.bottom {
    font-size: 22px;
  }
`;

const Index = () => {
  const router = useRouter();
  const handleClick = (type: IntroduceTitle) => {
    if (type === "Brussels") {
      window.open("https://lu.ma/L3Summit-EthCC");
      return;
    }
    router.push({
      pathname: "gallery",
      query: { type },
    });
  };
  return (
    <Wrap>
      {placeData.map((item) => (
        <Info key={item.type}>
          <TextWrap>
            <Text className={"top"}>{item.tText}</Text>
            <Text className={"center"}>{item.cText}</Text>
            <Text className={"bottom"}>{item.bText}</Text>
          </TextWrap>
          {item.type !== "" ? (
            <View
              src={view}
              alt={""}
              onClick={() => handleClick(item.type as IntroduceTitle)}
            />
          ) : null}
        </Info>
      ))}
    </Wrap>
  );
};

export default Index;
