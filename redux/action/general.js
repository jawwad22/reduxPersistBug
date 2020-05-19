import types from "../types";

export const setTest = (payload) => {
	return {
		type: types.SET_TEST,
		payload
	};
};
