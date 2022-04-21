import { itemActionType } from "../actionTypes/itemActionType";

const createRequest = (item) => {
    return {
        type: itemActionType.CREATE_REQUEST,
        payload: { item },
    };
};

const createSuccess = (item) => {
    return {
        type: itemActionType.CREATE_SUCCESS,
        payload: { item },
    };
};

export const itemAction = {
    createRequest,
    createSuccess,
};
