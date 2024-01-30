import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './counter';
import authReducer from './auth';

// configureStore will call one time only.
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;
