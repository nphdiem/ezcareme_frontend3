import { action } from "typesafe-actions";
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "constants/actionTypes";
import { Role } from "types/role";

export const LoginSuccess = (role: Role) => action(LOGIN_SUCCESS, { role });
export const LoginFailure = (error: string) => action(LOGIN_FAILURE, { error });
export const Logout = () => action(LOGOUT);
