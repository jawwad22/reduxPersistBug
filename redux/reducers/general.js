import types from "../types";
const {
	SET_TEST,
} = types;

const initialState = {
	test: 'testInitialValue'
};

const general = (state = initialState, action) => {
	switch (action.type) {
		case SET_TEST:
			return { ...state, test: action.payload };
		default:
			return state;
	}
};

export default general;
