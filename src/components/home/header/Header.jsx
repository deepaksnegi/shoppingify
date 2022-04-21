import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { searchAction } from "../../../store/actions/searchAction";

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="d-lg-flex justify-content-between mt-4 mb-5">
            <div className="header_text">
                <h5>
                    <span className="header_logo_text">Shoppingify</span> allows
                    you take your shopping list wherever you go
                </h5>
            </div>
            <div className="header_search">
                <i className="fa fa-search"></i>
                <input
                    type="text"
                    placeholder="Search item"
                    onChange={(event) =>
                        dispatch(searchAction.search(event.target.value))
                    }
                />
            </div>
        </div>
    );
};

export default Header;
