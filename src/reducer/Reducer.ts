import { IState } from "../store/State";
import { ActionTypes, ActionType } from "../actions/ActionTypes";

export const reducer = (state: IState, action: ActionTypes): IState => {
  switch (action.type) {
    case ActionType.SetUser: {
      return { ...state, user: action.payload };
    }
  }
};
