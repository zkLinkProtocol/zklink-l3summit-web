import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Partner } from "@/components/Homepage/Agenda/data";

const Wrap = styled.div`
  max-width: 1248px;
  text-align: center;
`;
const Title = styled.span`
  display: inline-block;
  height: 25px;
  margin-top: 140px;
  margin-bottom: 57px;
  padding: 0 27px;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 800;
  line-height: 26px; /* 100% */
  letter-spacing: 0.6px;
  background: #51cfff;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 57px;
`;

const Name = styled.span`
  margin-bottom: 33px;
  color: #51cfff;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.6px;
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Icon = styled(Image)`
  max-width: 220px;
  width: auto;
  height: auto;
  transform: scale(0.65);

  ${(props) => props.theme.breakpoints.down("sm")} {
    margin-bottom: 20px;
  }
`;

function Partners({ data }: { data: Partner }) {
  return (
    <Wrap>
      <div>
        <Title>{`> Sponsors <`}</Title>
        {data.sponsorsIcons.map((item) => (
          <Box key={item.name}>
            <Name>{item.name}</Name>
            <IconWrap>
              {item.icons.map((icon, idx) => (
                <Icon key={idx} src={icon} alt={"icon"} />
              ))}
            </IconWrap>
          </Box>
        ))}
      </div>
      <div>
        <Title>{`> Media Partners <`}</Title>
        {data.partnersIcons.map((item, i) => (
          <IconWrap key={i}>
            {item.map((icon, idx) => (
              <Icon key={idx} src={icon} alt={"icon"} />
            ))}
          </IconWrap>
        ))}
      </div>
    </Wrap>
  );
}

export default Partners;
