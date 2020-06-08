import { IAuthenticatedUser } from "../store/State";

export enum ActionType {
  SetAuthenticatedUser = "SetAuthenticatedUser",
}

export interface ISetAuthenticatedUser {
  type: ActionType.SetAuthenticatedUser;
  payload: IAuthenticatedUser;
}

export type ActionTypes = ISetAuthenticatedUser;
