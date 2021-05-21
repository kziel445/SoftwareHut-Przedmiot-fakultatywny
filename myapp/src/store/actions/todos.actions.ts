import { Todo } from "../reducers/todos.reducer";


export enum TodosStoreActions {
    SET_NEW_TODO = 'SET_NEW_TODO',
    SET_TODO_DONE = 'SET_TODO_DONE',
    SET_DELETE_TODO = 'SET_DELETE_TODO',
}
export interface SetNewTodoAction{
    type: TodosStoreActions.SET_NEW_TODO,
    payload:{
        todo: Todo
    }
}
export interface SetTodoDoneAction{
    type: TodosStoreActions.SET_TODO_DONE,
    payload:{
        id: number,
    }
}
export interface SetDeleteTodoAction{
    type: TodosStoreActions.SET_DELETE_TODO,
    payload:{
        todo: Todo,
    }
}

export const todosActions = {
    setTodoDone: (todo: Todo) => ({
        type: TodosStoreActions.SET_NEW_TODO,
        payload: {
            todo
        }
    }),
    setNewTodo:(id: number) => ({
        type: TodosStoreActions.SET_TODO_DONE,
        payload: {
            id
        }
    }),
    setDeletTodo:(todo: Todo) => ({
        type: TodosStoreActions.SET_DELETE_TODO,
        payload: {
            todo
        }
    }),
}