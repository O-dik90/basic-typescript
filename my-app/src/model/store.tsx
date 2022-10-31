import { combineReducers, createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { TodoReducer } from "./Todo/Reducer";

const reducers = combineReducers({
  todo: TodoReducer,
});

const store = createStore(reducers);

export const StoreProvider = (props: any) => (  
  <Provider store={store} {...props}></Provider>
);
