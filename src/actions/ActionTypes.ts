import { IUser, IRoom } from "../store/State";
import { IMessage } from "./../store/State";

export enum ActionType {
  SetUser = "SetUser",
  SetCurrentRoom = "SetCurrentRoom",
  AppendMessageToRoom = "AppendMessageToRoom",
}

export interface ISetUser {
  type: ActionType.SetUser;
  payload: IUser;
}

export interface ISetCurrentRoom {
  type: ActionType.SetCurrentRoom;
  payload: IRoom;
}

export interface IAppendMessageToRoom {
  type: ActionType.AppendMessageToRoom;
  payload: {
    message: IMessage;
    room: IRoom;
  };
}

export type ActionTypes = ISetUser | ISetCurrentRoom | IAppendMessageToRoom;
