import { IUser } from "../store/State";

export enum ActionType {
  SetUser = "SetUser",
}

export interface ISetUser {
  type: ActionType.SetUser;
  payload: IUser;
}

export type ActionTypes = ISetUser;
