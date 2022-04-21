import { categoryActionType } from "../actionTypes/categoryActionType";
import Categories from "../../helper/mockData/Categories.json";

export const getCategories = () => {
    const categories = JSON.parse(Categories);
    return { type: categoryActionType.GET_SUCCESS, payload: { categories } };
};

export const categoryAction = {
    getCategories,
};
