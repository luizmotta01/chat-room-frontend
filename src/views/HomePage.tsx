import React from "react";
import styled from "styled-components";
import { ToggleMenu } from "../components/menu/toggle-menu/ToggleMenu";

const HomePageDiv = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #343b4a;
`;

export const HomePage: React.FC = () => {
  return (
    <HomePageDiv>
      <ToggleMenu />
    </HomePageDiv>
  );
};
