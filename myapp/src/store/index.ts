import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(reducers, initialStoreState,composeWithDevTools());
export default store;