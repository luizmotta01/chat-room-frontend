import React from "react";
import styled from "styled-components";
import { Menu } from "../components/menu/menu/Menu";

const HomePageDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #343b4a;
`;

export const HomePage: React.FC = () => {
  return (
    <HomePageDiv>
      <Menu />
    </HomePageDiv>
  );
};
