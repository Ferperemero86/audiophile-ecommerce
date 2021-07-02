import { createStore } from "redux";

import { rootReducers } from "./reducers/root-reducers";

export const store = createStore(rootReducers);
