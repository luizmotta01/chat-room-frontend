export interface IState {
  user: IUser;
  contacts?: IUser[];
}

export interface IUser {
  username: string;
}

export const initialState: IState = {
  user: {
    username: "",
  },
  contacts: [],
};
