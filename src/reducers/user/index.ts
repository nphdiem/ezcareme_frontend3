import produce from "immer";
import { User } from "types/schema";
import { ActionType } from "typesafe-actions";
import * as actions from "actions/user";
import { USER_UPDATE } from "constants/actionTypes";

export interface UserState {
  readonly user: User | null;
}

export type ExpertActions = ActionType<typeof actions>;

const initialState: UserState = {
  user: null,
};

const userReducer = (
  state: UserState = initialState,
  action: ExpertActions
): UserState =>
  produce(state, (draft) => {
    switch (action.type) {
      case USER_UPDATE:
        draft.user = action.payload;
        break;
    }
  });

export default userReducer;
