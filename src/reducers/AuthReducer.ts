import produce from "immer";
import { ActionType } from "typesafe-actions";
import * as actions from "actions/authAction";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "constants/actionTypes";
import { Role } from "types/role";

export interface AuthState {
  readonly isLogin: boolean;
  readonly role: Role;
  readonly error: string;
}

export type AuthActions = ActionType<typeof actions>;

const initialState: AuthState = {
  isLogin: false,
  role: null,
  error: "",
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthActions
): AuthState =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.isLogin = true;
        draft.role = action.payload.role;
        draft.error = "";
        break;
      case LOGIN_FAILURE:
        draft.isLogin = false;
        draft.role = null;
        draft.error = action.payload.error;
        break;
      case LOGOUT:
        draft.isLogin = false;
        draft.role = null;
        draft.error = "";
        break;
    }
  });

export default authReducer;
