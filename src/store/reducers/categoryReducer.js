import { categoryActionType } from "../actionTypes/categoryActionType";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case categoryActionType.GET_SUCCESS:
            return [...action.payload.categories];
        default:
            return [...state];
    }
};

export default categoryReducer;
