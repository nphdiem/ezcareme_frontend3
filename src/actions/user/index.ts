import { action } from "typesafe-actions";
import { User } from "types/schema";
import { USER_UPDATE } from "constants/actionTypes";

export const Login = (user: User) => action(USER_UPDATE, user);
