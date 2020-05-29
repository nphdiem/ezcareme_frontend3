import produce from "immer";
import { Expert } from "types/schema";
import { ActionType } from "typesafe-actions";
import * as actions from "actions/expert";
import { EXPERT_UPDATE } from "constants/actionTypes";

export interface ExpertState {
  readonly expert: Expert | null;
}

export type ExpertActions = ActionType<typeof actions>;

const initialState: ExpertState = {
  expert: null,
};

const expertReducer = (
  state: ExpertState = initialState,
  action: ExpertActions
): ExpertState =>
  produce(state, (draft) => {
    switch (action.type) {
      case EXPERT_UPDATE:
        draft.expert = action.payload;
        break;
    }
  });

export default expertReducer;
