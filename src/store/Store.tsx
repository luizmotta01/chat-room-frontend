import React, { createContext, useContext, useReducer } from "react";
import { IState, initialState } from "./State";
import { reducer } from "./../reducer/Reducer";
import { ActionTypes } from "../actions/ActionTypes";

interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<ActionTypes>;
}

const ChatRoomContext = createContext({} as IContextProps);

export const useChatRoomContext = () => useContext(ChatRoomContext);

export function useSelector<T>(selector: (state: IState) => T) {
  const { state } = useChatRoomContext();
  return selector(state);
}

const Store: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <ChatRoomContext.Provider value={value} children={children} />;
};

export default Store;
