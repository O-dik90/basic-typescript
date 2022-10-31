import { TodoModel, TodoAction, TodoActionType } from "./type";

export const TodoReducer = (
  state: TodoModel | null = {},
  action: TodoAction
) => {
  switch (action.type) {
    case TodoActionType.TodoAdd:
      return { ...state, Todo: action.value };
    default:
      return state;
  }
};
