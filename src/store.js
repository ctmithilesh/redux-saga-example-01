import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import catReducer from "./reducers/catReducer";
import catSaga from "./sagas/catSaga";
import dogReducer from "./reducers/dogReducer";
import dogSaga from "./sagas/dogSaga";

const saga = createSagaMiddleware()

const store = configureStore({
    reducer: {
        cats: catReducer,
        dogs: dogReducer
    },
    middleware:[saga]
})
saga.run(catSaga)
saga.run(dogSaga)

export default store;
