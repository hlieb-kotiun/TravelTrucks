"use client";
import { Formik } from "formik";

const FilterBar = () => {
  const initialValues = {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmitForm = (value, helper) => {};

  return (
    <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
      <h1>FilterBar</h1>
    </Formik>
  );
};
export default FilterBar;
