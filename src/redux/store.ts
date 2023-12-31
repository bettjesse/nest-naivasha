
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import registerReducer from "./slices/registerModalSlice";
import loginReducer from "./slices/loginModalSlice";

export const store = configureStore({
    reducer:{
        registerModal: registerReducer,
        loginModal: loginReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
 

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;