import { Guid } from "guid-typescript";

export interface IState {
  user: IUser;
  contacts?: IUser[];
  currentRoom: IRoom;
}

export interface IUser {
  id: Guid;
  username: string;
}

export enum RoomType {
  Direct = "Direct",
  Group = "Group",
}

export interface IRoom {
  id: Guid;
  name: string;
  members: IUser[];
  messages?: IMessage[];
  roomType: RoomType;
}

export interface IMessage {
  from: IUser;
  sent: Date;
  text: string;
}

const userId = Guid.create();
const user = {
  id: userId,
  username: "",
};

const user2 = {
  id: Guid.create(),
  username: "luiz",
};
export const initialState: IState = {
  user,
  currentRoom: {
    id: Guid.create(),
    name: "Public Room",
    members: [],
    roomType: RoomType.Group,
    messages: [
      // { from: user, sent: new Date(), text: "Hello!" },
      {
        from: user2,
        sent: new Date(),
        text: `Hey\nTudo bem??`,
      },
    ],
  },
  contacts: [],
};
