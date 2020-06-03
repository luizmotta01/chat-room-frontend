import React from "react";
import styled from "styled-components";
import { IUser } from "../../../store/State";
import { MessageSent } from "./MessageSent";
import { MessageFrom } from "./MessageFrom";
export interface IMessageHeaderProperties {
  from: IUser;
  sent: Date;
}
const MessageHeaderDiv = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  padding: 5px 0px 2px 0px;
`;
export const MessageHeader: React.FC<IMessageHeaderProperties> = (props) => {
  return (
    <MessageHeaderDiv>
      <MessageFrom {...props} />
      <MessageSent {...props} />
    </MessageHeaderDiv>
  );
};
