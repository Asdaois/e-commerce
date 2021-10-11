import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import CreateSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = CreateSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
// eslint-disable-next-line
export default { store, persistor };
