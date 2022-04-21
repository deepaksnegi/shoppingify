import React, { useEffect, useState } from "react";
import ShoppingList from "./shoppingList/ShoppingList";
import AddItem from "./addItem/AddItem";
import { useDispatch } from "react-redux";
import { categoryAction } from "../../store/actions/categoryAction";

const Aside = () => {
    const dispatch = useDispatch();
    const [isAddItem, setIsAddItem] = useState(false);

    useEffect(() => {
        dispatch(categoryAction.getCategories());
    }, [dispatch]);

    return (
        <aside className="aside d-none d-md-block">
            {isAddItem ? (
                <AddItem showAddItem={setIsAddItem} />
            ) : (
                <ShoppingList showAddItem={setIsAddItem} />
            )}
        </aside>
    );
};

export default Aside;
