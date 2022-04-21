import { itemActionType } from "../actionTypes/itemActionType";

const initialState = [];

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemActionType.CREATE_SUCCESS:
            const item = action.payload.item;
            const existingItems = JSON.parse(JSON.stringify(state));
            return _addItem(existingItems, item);
        default:
            return [...state];
    }
};

const _addItem = (state, item) => {
    const index = state.findIndex(
        (i) => i.name === item.name && i.categoryId === item.categoryId
    );
    if (index !== -1) {
        state[index].quantity++;
    } else {
        state.push({ ...item, quantity: 1 });
    }
    return state;
};

export default itemReducer;
