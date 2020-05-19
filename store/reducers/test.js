import { SET_TEST } from "../actions/test";

const initialState = {
    test: 'testInitialValue'
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEST:
            state.test = action.test;
            return state;
        default: 
            return state;
    }
}

export default testReducer;