export type TodoModel = {
  id?: number
  title?: string
  desc?: string
}

export enum TodoActionType {
  TodoAdd = 'TodoAdd'
}

export type TodoAction = { type: TodoActionType.TodoAdd, value?: string}