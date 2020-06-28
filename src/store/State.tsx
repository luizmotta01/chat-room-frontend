import { Guid } from "guid-typescript";

export interface IState {
  user?: IAuthenticatedUser;
  contacts?: IContact[];
}

export enum Status {
  Available = "Available",
  Busy = "Busy",
  Away = "Away",
  Offline = "Offline",
}

export interface IAuthenticatedUser {
  id: string;
  username: string;
  jwtToken: string;
  refreshToken: string;
}

export interface IContact {
  username: string;
  status: Status;
}

export const initialState: IState = {
  user: {
    id: Guid.create().toString(),
    username: "Motta",
    jwtToken: "12312423dsffjdiosjfs",
    refreshToken: "12312423dsffjdiosjfs",
  },
  contacts: [{ username: "", status: Status.Available }],
};
