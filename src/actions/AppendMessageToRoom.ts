import { IMessage, IRoom } from "../store/State";

export const appendMessageToRoom = (message: IMessage, room: IRoom): IRoom => {
  const { messages } = room;
  return { ...room, messages: messages ? [...messages, message] : [message] };
};
