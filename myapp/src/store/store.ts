import { combineReducers } from "redux";
import { TodosList, todosListInitialState, todosStoreReducer } from "./reducers/todos.reducer";

export type StoreActionTypes = '';

interface StoreState {
    todos: TodosList;
};

const initialStoreState: StoreState = {
    todos: todosListInitialState,
};

export const reducers = combineReducers<StoreState>({
    todos:todosStoreReducer,
});