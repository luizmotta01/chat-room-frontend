import React from "react";
import styled from "styled-components";

const ContactsDiv = styled.div`
  /* position: -webkit-sticky;
  position: sticky;
  left: 0; */
  margin: 10px 10px;
  max-width: 300px;
  width: 100%;
  height: calc(100vh - 30px);
  background-color: #6340b2;
  border-radius: 10px;
  /* border-top-right-radius: 10px; */
  /* border-bottom-right-radius: 10px; */
`;

export const Contacts: React.FC = () => {
  return <ContactsDiv></ContactsDiv>;
};
