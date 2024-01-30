import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const counterReducer = (state = initialState, action) => {

    if ('increment' === action.type) {
        return {
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        };
    }

    if ('decrement' === action.type) {
        return {
            counter: state.counter - action.payload,
            showCounter: state.showCounter
        };
    }

    if ('toggle' === action.type) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
