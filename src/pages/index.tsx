import React from "react";
import styled from "styled-components";
import Header from "../components/Homepage/Header";
import Introduce from "../components/Homepage/Introduce";
import Agenda from "../components/Homepage/Agenda";
import Leaders from "../components/Homepage/Leaders";
import Speaker from "../components/Homepage/Speaker";
import Footer from "@/components/Footer";
import Gathering from "@/components/Homepage/Gathering";
import Promotional from "@/components/Homepage/Promotional";
import Sponsors from "@/components/Homepage/Sponsors";

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
      <Sponsors />
      <Introduce />
      <Promotional />
      <Gathering />
      <Agenda />
      <Leaders />
      <Speaker />
      <Footer />
    </Wrapper>
  );
};
export default Index;
