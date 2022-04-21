import { searchActionType } from "../actionTypes/searchActionType";

const initialState = "";

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchActionType.SEARCH:
            return action.payload.keyword;
        default:
            return state;
    }
};

export default searchReducer;
