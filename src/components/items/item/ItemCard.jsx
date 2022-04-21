import React from "react";
import isEqual from "react-fast-compare";

const ItemCard = ({ item, addItem }) => {
    return (
        <div className="items_card">
            <div className="card_title">{item.name}</div>
            <button className="btn" onClick={() => addItem(item)}>
                <i className="fa fa-plus"></i>
            </button>
        </div>
    );
};

export default React.memo(ItemCard, isEqual);
