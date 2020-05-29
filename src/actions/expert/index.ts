import { action } from "typesafe-actions";
import { Expert } from "types/schema";
import { EXPERT_UPDATE } from "constants/actionTypes";

export const Login = (expert: Expert) => action(EXPERT_UPDATE, expert);
