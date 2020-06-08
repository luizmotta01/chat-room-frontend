import { toast } from "react-toastify";

export const notifySuccess = (message: string) =>
  toast.success(message, {
    autoClose: 5000,
  });

export const notifyError = (message: string) => {
  toast.error(message, {
    autoClose: 5000,
  });
};

export const notifyInfo = (message: string) => {
  toast.info(message, {
    autoClose: 5000,
  });
};
