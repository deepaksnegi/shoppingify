import React from "react";
import classes from "./History.css";

const History = () => {
    return (
        <div>
            <h4 className={classes.history_title}>Shopping History</h4>

            <div className="history_container">
                <p className="history_date">February 2022</p>
            </div>
        </div>
    );
};

export default History;
