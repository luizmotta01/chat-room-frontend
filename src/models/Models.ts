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

export interface IAuthenticationModel {
  id: string;
  username: string;
  jwtToken: string;
  refreshToken: string;
}
