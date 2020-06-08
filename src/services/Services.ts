import axios from "axios";
import endpoints from "../chatroom-config.json";
import { IUserModel, IRegistrationResponse } from "./../models/UserModel";

export const registration = async (
  userModel: IUserModel
): Promise<IRegistrationResponse> => {
  const { data } = await axios.post(endpoints.registration, userModel);
  return data as IRegistrationResponse;
};

export const login = (userModel: IUserModel) => {
  console.log(endpoints);
};
