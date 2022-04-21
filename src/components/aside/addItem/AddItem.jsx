import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { itemAction } from "../../../store/actions/itemAction";
import "./AddItem.css";
import isEqual from "react-fast-compare";

const schema = yup.object({
    name: yup.string().required().min(2).max(30),
    note: yup.string().min(2).max(300),
    image: yup.string().min(10).max(60).url(),
    category: yup.string().required(),
});

const AddItem = ({ showAddItem }) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: "",
            note: "",
            image: "",
            category: "",
        },
        validationSchema: schema,
        onSubmit: (values) => addNewItem(values),
    });

    const categories = useSelector((state) => state.category, isEqual);

    const addNewItem = (values) => {
        const { category, ...item } = values;
        item.categoryId = categories.find((c) => c.name === category)?.id;
        dispatch(itemAction.createSuccess(item));
        formik.resetForm();
    };

    return (
        <div className="additem_container">
            <p className="additem_heading">Add a new item</p>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control shadow-none"
                        placeholder="Enter a name"
                        {...formik.getFieldProps("name")}
                    />
                    <div className="text-danger">
                        {formik.touched.name &&
                            formik.errors &&
                            formik.errors.name}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="note" className="form-label">
                        Note (optional)
                    </label>
                    <textarea
                        name="note"
                        className="form-control shadow-none"
                        rows="3"
                        placeholder="Enter a note"
                        {...formik.getFieldProps("note")}
                    ></textarea>
                    <div className="text-danger">
                        {formik.touched.note &&
                            formik.errors &&
                            formik.errors.note}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        Image (optional)
                    </label>
                    <input
                        type="url"
                        name="image"
                        className="form-control shadow-none"
                        placeholder="Enter a url"
                        {...formik.getFieldProps("image")}
                    />
                    <div className="text-danger">
                        {formik.touched.image &&
                            formik.errors &&
                            formik.errors.image}
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="category" className="form-label">
                        Category
                    </label>
                    <div className="dropdown">
                        <input
                            className="form-control dropdown-toggle shadow-none"
                            type="text"
                            name="category"
                            data-bs-toggle="dropdown"
                            placeholder="Enter a category"
                            autoComplete="off"
                            {...formik.getFieldProps("category")}
                        />
                        <ul className="dropdown-menu form-control additem_options">
                            {categories.map((c) => (
                                <li
                                    className="dropdown-item additem-selected"
                                    key={c.id}
                                    onClick={() =>
                                        formik.setFieldValue("category", c.name)
                                    }
                                >
                                    {c.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-danger">
                        {formik.touched.category &&
                            formik.errors &&
                            formik.errors.category}
                    </div>
                </div>

                <div className="my-4 text-center">
                    <button
                        className="btn me-4"
                        type="reset"
                        onClick={() => {
                            formik.resetForm();
                            showAddItem(false);
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="btn p-3 additem_save"
                        type="submit"
                        disabled={formik.isSubmitting}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;
