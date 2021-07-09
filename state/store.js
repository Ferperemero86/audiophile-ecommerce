import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducers } from "./reducers/root-reducers";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"]
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
