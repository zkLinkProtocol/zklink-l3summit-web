import React from "react";
import styled from "styled-components";
import arpa from "@/assets/homepage/block2/partners/arpa.png";
import arrin from "@/assets/homepage/block2/partners/arrin.png";
import beat from "@/assets/homepage/block2/partners/beat.png";
import block from "@/assets/homepage/block2/partners/block.png";
import bscn from "@/assets/homepage/block2/partners/bscn.png";
import came from "@/assets/homepage/block2/partners/came.png";
import coin from "@/assets/homepage/block2/partners/coin.png";
import coinpost from "@/assets/homepage/block2/partners/coinpost.png";
import cryptorank from "@/assets/homepage/block2/partners/cryptorank.png";
import izu from "@/assets/homepage/block2/partners/izu.png";
import manta from "@/assets/homepage/block2/partners/manta.png";
import metav from "@/assets/homepage/block2/partners/metav.png";
import okx from "@/assets/homepage/block2/partners/okx.png";
import qed from "@/assets/homepage/block2/partners/qed.png";
import rollup from "@/assets/homepage/block2/partners/rollup.png";
import Image from "next/image";

const Wrap = styled.div`
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
  margin-top: 22px;
`;
const Icon = styled(Image)`
  width: auto;
  height: fit-content;
  transform: scale(0.65);
`;

function Partners() {
  return (
    <Wrap>
      <div>
        <Title>{`> Sponsors <`}</Title>
        <Box>
          <Name>Title</Name>
          <IconWrap>
            <Icon src={qed} alt={""} />
          </IconWrap>
        </Box>
        <Box>
          <Name>Diamond</Name>
          <IconWrap>
            <Icon src={arpa} alt={""} />
            <Icon src={manta} alt={""} />
            <Icon src={okx} alt={""} />
          </IconWrap>
        </Box>
        <Box>
          <Name>Gold</Name>
          <IconWrap>
            <Icon src={arrin} alt={""} />
            <Icon src={izu} alt={""} />
          </IconWrap>
        </Box>
      </div>
      <div>
        <Title>{`> Media Partners <`}</Title>
        <IconWrap>
          <Icon src={block} alt={""} />
          <Icon src={bscn} alt={""} />
          <Icon src={coinpost} alt={""} />
          <Icon src={coin} alt={""} />
        </IconWrap>

        <IconWrap>
          <Icon src={came} alt={""} />
          <Icon src={cryptorank} alt={""} />
          <Icon src={beat} alt={""} />
        </IconWrap>

        <IconWrap>
          <Icon src={metav} alt={""} />
          <Icon src={rollup} alt={""} />
        </IconWrap>
      </div>
    </Wrap>
  );
}

export default Partners;
