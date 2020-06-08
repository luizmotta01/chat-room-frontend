import { Guid } from "guid-typescript";

export interface IState {
  user?: IAuthenticatedUser;
}

export interface IAuthenticatedUser {
  id: string;
  username: string;
  jwtToken: string;
  refreshToken: string;
}

export const initialState: IState = {};
