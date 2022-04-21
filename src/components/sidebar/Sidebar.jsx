import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import isEqual from "react-fast-compare";
import { motion } from "framer-motion";

const Sidebar = () => {
    const totalShoppingItems = useSelector(
        (state) => state.shoppingList.length,
        isEqual
    );

    const links = [
        {
            icon: () => <i className="fa fa-bars" />,
            to: "/",
            name: "home",
        },
        {
            icon: () => <i className="fa fa-history" />,
            to: "/recent",
            name: "recent",
        },
        {
            icon: () => <i className="fa fa-tasks" />,
            to: "/dashboard",
            name: "dashboard",
        },
    ];

    return (
        <div className="sidebar_container">
            <motion.div
                className="sidebar_logo"
                animate={{ rotate: 360 }}
                transition={{
                    ease: "linear",
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                S
            </motion.div>
            <div className="sidebar_items">
                {links.map((link) => (
                    <NavLink
                        className={({ isActive }) =>
                            `sidebar_item ${isActive && "sidebar_active_item"}`
                        }
                        to={link.to}
                        key={link.name}
                    >
                        {link.icon()}
                    </NavLink>
                ))}
            </div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                drag
                dragDirectionLock
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
                className="sidebar_cart"
            >
                <button className="sidebar_cart_button btn position-relative">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="sidebar_badge position-absolute top-0 start-100 translate-middle badge square-pill bg-danger">
                        {totalShoppingItems}
                    </span>
                </button>
            </motion.div>
        </div>
    );
};

export default Sidebar;
