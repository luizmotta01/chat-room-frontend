import { IUser, IRoom } from "../store/State";

export enum ActionType {
  SetUser = "SetUser",
  SetCurrentRoom = "SetCurrentRoom",
}

export interface ISetUser {
  type: ActionType.SetUser;
  payload: IUser;
}

export interface ISetCurrentRoom {
  type: ActionType.SetCurrentRoom;
  payload: IRoom;
}

export type ActionTypes = ISetUser | ISetCurrentRoom;
