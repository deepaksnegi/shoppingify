import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Items.css";
import { shoppingListAction } from "../../store/actions/shoppingListAction";
import isEqual from "react-fast-compare";
import ItemCard from "./item/ItemCard";
import { motion, AnimatePresence } from "framer-motion";

const Items = () => {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.item, isEqual);
    const categories = useSelector((state) => state.category, isEqual);
    const search = useSelector((state) => state.search);

    const getItems = () => {
        return items
            .filter((i) => i.name.toLowerCase().includes(search.toLowerCase()))
            .reduce(
                (result, item) => ({
                    ...result,
                    [item.categoryId]: [
                        ...(result[item.categoryId] || []),
                        item,
                    ],
                }),
                {}
            );
    };

    const memoizedAddItem = useCallback(
        (item) => {
            dispatch(shoppingListAction.createSuccess(item));
        },
        [dispatch]
    );

    return Object.entries(getItems()).map(([key, value]) => (
        <AnimatePresence>
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className="items_container my-4"
                key={key}
            >
                <p className="items_heading">
                    {categories.find((c) => c.id === +key)?.name || "unknown"}
                </p>
                <div className="row">
                    {value.map((item) => (
                        <div
                            className="col-sm-6 col-md-4 col-lg-3"
                            key={item.id}
                        >
                            <ItemCard item={item} addItem={memoizedAddItem} />
                        </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    ));
};

export default Items;
