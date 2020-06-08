import axios from "axios";
import endpoints from "../chatroom-config.json";
import {
  IUserModel,
  IRegistrationResponse,
  IAuthenticationModel,
} from "../models/Models";

export const registration = async (
  userModel: IUserModel
): Promise<IRegistrationResponse> => {
  const { data } = await axios.post(endpoints.registration, userModel);
  return data as IRegistrationResponse;
};

export const login = async (userModel: IUserModel) => {
  const { data } = await axios.post(endpoints.authentication, userModel);
  return data as IAuthenticationModel;
};
