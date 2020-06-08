export enum ActionType {
  Dummy = "Dummy",
}

export interface IDummy {
  type: ActionType.Dummy;
  payload: any;
}

export type ActionTypes = IDummy;
