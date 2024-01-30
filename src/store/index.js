import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

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
