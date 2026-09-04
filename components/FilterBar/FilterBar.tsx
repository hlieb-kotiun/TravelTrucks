"use client";
import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./FilterBar.module.css";
import { FilterFromValues, Filters } from "@/types/types";
import { IoMdClose } from "react-icons/io";

interface FilterBarProps {
  filters: Filters | undefined;
  onSearch: (values: FilterFromValues) => void;
  onReset: () => void;
}

const FilterBar = ({ filters, onSearch, onReset }: FilterBarProps) => {
  const initialValues: FilterFromValues = {
    location: "",
    forms: "",
    transmissions: "",
    engines: "",
  };

  console.log("filters : ", filters);

  const handleSubmitForm = (
    values: FilterFromValues,
    actions: FormikHelpers<FilterFromValues>,
  ) => {
    onSearch(values);
  };

  return (
    <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
      <Form className={css.form}>
        <label className={css.inputLabel}>
          Location
          <Field
            type="text"
            name="location"
            className={css.inputField}
            placeholder="City"
          />
        </label>
        <div className={css.fieldsetWrapper}>
          <h2 className={css.formTitle}>Filters</h2>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Camper form</legend>

            {filters?.forms.map((value, idx) => {
              const firstChar = value[0];

              return (
                <label key={idx} className={css.radioFieldLabel}>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="forms"
                    value={value}
                  />
                  <span className={css.customRadio} />
                  <span>
                    {value
                      .replace(firstChar, firstChar.toUpperCase())
                      .replace("_", " ")}
                  </span>
                </label>
              );
            })}
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Engine</legend>

            {filters?.engines.map((value, idx) => {
              const firstChar = value[0];

              return (
                <label key={idx} className={css.radioFieldLabel}>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="engines"
                    value={value}
                  />
                  <span className={css.customRadio} />
                  <span>
                    {value
                      .replace(firstChar, firstChar.toUpperCase())
                      .replace("_", " ")}
                  </span>
                </label>
              );
            })}
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Transmission</legend>
            {filters?.transmissions.map((value, idx) => {
              const firstChar = value[0];

              return (
                <label key={idx} className={css.radioFieldLabel}>
                  <Field
                    className={css.radioInput}
                    type="radio"
                    name="transmissions"
                    value={value}
                  />
                  <span className={css.customRadio} />
                  <span>
                    {value
                      .replace(firstChar, firstChar.toUpperCase())
                      .replace("_", " ")}
                  </span>
                </label>
              );
            })}
          </fieldset>
        </div>
        <div className={css.btnWrapper}>
          <button className={`greenBtn ${css.submitBtn}`} type="submit">
            Search
          </button>
          <button className={css.clearBtn} type="button" onClick={onReset}>
            <IoMdClose width="24" height="24" className={css.clearBtnIcon} />
            Clear filters
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default FilterBar;
