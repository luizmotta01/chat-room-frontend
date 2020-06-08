export interface IUserModel {
  email?: string;
  username?: string;
  password: string;
}

export interface IRegistrationResponse {
  payload: {
    registered: boolean;
  };
  statusCode: number;
  messages: string[];
}
