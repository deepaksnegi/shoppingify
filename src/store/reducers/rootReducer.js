import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import itemReducer from "./itemReducer";
import searchReducer from "./searchReducer";
import shoppingListReducer from "./shoppingListReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    item: itemReducer,
    shoppingList: shoppingListReducer,
    search: searchReducer,
});

export default rootReducer;
