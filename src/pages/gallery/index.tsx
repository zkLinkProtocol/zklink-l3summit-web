import React from "react";
import styled from "styled-components";
import Gallery from "@/components/Gallery/gallery";

import Footer from "@/components/Footer";

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  color: #000;
  overflow: hidden;
`;

const Index = () => {
  return (
    <Wrapper>
      <Gallery />
      <Footer />
    </Wrapper>
  );
};
export default Index;
