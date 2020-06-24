import axios from "axios";
import endpoints from "../chatroom-config.json";
import {
  IUserModel,
  IRegistrationResponse,
  IAuthenticationResponse,
  IRegistrationRequest,
} from "../models/Models";

export const registration = async (
  request: IRegistrationRequest
): Promise<IRegistrationResponse> => {
  const { data } = await axios.post(endpoints.registration, request);
  return data as IRegistrationResponse;
};

export const login = async (userModel: IUserModel) => {
  const { data } = await axios.post(endpoints.authentication, userModel);
  return data as IAuthenticationResponse;
};
