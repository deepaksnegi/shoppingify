import { shoppingListActionType } from "../actionTypes/shoppingListActionType";

const createRequest = (item) => {
    return {
        type: shoppingListActionType.CREATE_REQUEST,
        payload: { item },
    };
};

const createSuccess = (item) => {
    return {
        type: shoppingListActionType.CREATE_SUCCESS,
        payload: { item },
    };
};

export const shoppingListAction = {
    createRequest,
    createSuccess,
};
