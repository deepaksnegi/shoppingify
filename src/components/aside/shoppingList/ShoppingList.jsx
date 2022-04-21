import React, { useState } from "react";
import "./ShoppingList.css";
import WineBottle from "../../../assets/icons/wine.svg";
import { useSelector } from "react-redux";
import isEqual from "react-fast-compare";
import { useDispatch } from "react-redux";
import { shoppingListAction } from "../../../store/actions/shoppingListAction";
import { motion } from "framer-motion";

const ShoppingList = ({ showAddItem }) => {
    const shoppingList = useSelector((state) => state.shoppingList, isEqual);
    const categories = useSelector((state) => state.category, isEqual);
    const [itemName, setItemName] = useState("");
    const dispatch = useDispatch();

    function getList() {
        return shoppingList.reduce(
            (result, item) => ({
                ...result,
                [item.categoryId]: [...(result[item.categoryId] || []), item],
            }),
            {}
        );
    }

    const List = () => (
        <>
            <div className="shopping_list_heading">
                <h6>Shopping list</h6>
                <button className="btn">
                    <i className="fa fa-pencil"></i>
                </button>
            </div>
            {Object.entries(getList()).map(([key, value]) => (
                <div className="my-4" key={key}>
                    <div className="shopping_item_title">
                        {categories.find((c) => c.id === +key)?.name ||
                            "unknown"}
                    </div>

                    {value.map((i) => (
                        <div className="shopping_item" key={i.id}>
                            {i.name}
                            <span>{i.quantity} pcs</span>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );

    const addItem = (event) => {
        event.preventDefault();
        if (itemName) {
            const item = { name: itemName, id: 232, categoryId: 4 };
            dispatch(shoppingListAction.createSuccess(item));
            setItemName("");
        }
    };

    const ShoppingFooter = () => (
        <div className="shopping_footer">
            <form onSubmit={addItem}>
                <div className="d-flex">
                    <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Enter a name"
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                    />
                    <button
                        className="btn"
                        type="submit"
                        disabled={itemName.length < 2}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="shopping_container">
            <div className="shopping_list_container">
                <div className="shopping_add_card d-flex">
                    <div className="shopping_image">
                        <motion.img
                            src={WineBottle}
                            alt="bottle"
                            drag
                            dragConstraints={{
                                top: 110,
                                right: 125,
                                bottom: 100,
                                left: 125,
                            }}
                            dragTransition={{
                                bounceStiffness: 600,
                                bounceDamping: 20,
                            }}
                            dragElastic={0.5}
                            whileTap={{ cursor: "grabbing" }}
                        />
                    </div>
                    <div className="shopping_add">
                        <p>Didn't find what you need?</p>
                        <button
                            className="btn"
                            onClick={() => {
                                showAddItem(true);
                            }}
                        >
                            Add Item
                        </button>
                    </div>
                </div>

                <motion.div layout className="shopping_list">
                    <List />
                </motion.div>
            </div>
            <ShoppingFooter />
        </div>
    );
};

export default ShoppingList;
