import React from "react";
import styled from "styled-components";
import { UserForm } from "../components/UserForm";

const HomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #382465;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomePage: React.FC = () => {
  return (
    <HomeDiv>
      <UserForm />
    </HomeDiv>
  );
};
