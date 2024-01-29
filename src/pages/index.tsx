import React from "react";
import styled from "styled-components";
import Header from "../components/Homepage/Header";
import Block from "../components/Homepage/Block";
import Block2 from "@/components/Homepage/Block2";
import Block3 from "@/components/Homepage/Block3";
import Block4 from "@/components/Homepage/Block4";
import Footer from "@/components/Footer";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: #000;
  overflow: hidden;
`;

const Index = () => {
  return (
    <Wrapper>
      <Header />
      <Block />
      <Block2 />
      <Block3 />
      <Block4 />
      <Footer />
    </Wrapper>
  );
};
export default Index;
