import { searchActionType } from "../actionTypes/searchActionType";

const search = (keyword) => {
    return {
        type: searchActionType.SEARCH,
        payload: { keyword },
    };
};

export const searchAction = {
    search,
};
