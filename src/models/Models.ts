export interface IUserModel {
  email?: string;
  username?: string;
  password: string;
}

export interface IRegistrationRequest {
  email: string;
  username: string;
  password: string;
  agreement: boolean;
}

export interface IRegistrationResponse extends IResponse {}

export interface IAuthenticationResponse extends IResponse {
  payload?: {
    id: string;
    username: string;
    jwtToken: string;
    refreshToken: string;
  };
}

export interface IResponse {
  statusCode: number;
  messages: string[];
}
