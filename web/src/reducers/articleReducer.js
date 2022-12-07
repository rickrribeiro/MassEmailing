import { SET_LOADING_STATUS, GET_ARTICLES } from "../action/actionType";

export const initialState = {
	loading: false,
	articles: [],
};

function articleReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ARTICLES:
			console.log("ENTROU2")
			return {
				...state,
				articles: action.payload,
				ids: action.id,
			};
		case SET_LOADING_STATUS:
			console.log("ENTROU3")
			return {
				...state,
				loading: action.status,
			};
		default:
			return state;
	}
}

export default articleReducer;
