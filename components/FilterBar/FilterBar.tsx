"use client";
import { Field, Form, Formik, FormikHandlers, FormikHelpers } from "formik";
import css from "./FilterBar.module.css";
import {
  CamperForm,
  Engine,
  FilterFromValues,
  Transmission,
} from "@/types/types";
import { IoMdClose } from "react-icons/io";

interface FilterBarProps {
  onSearch: (values: FilterFromValues) => void;
}

const FilterBar = ({ onSearch }: FilterBarProps) => {
  const initialValues: FilterFromValues = {
    location: "",
    forms: "panel_van",
    transmissions: "automatic",
    engines: "petrol",
  };

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

            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="forms"
                value="alcove"
              />
              <span className={css.customRadio} />
              <span>Alcove</span>
            </label>

            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="forms"
                value="panel_van"
              />
              <span className={css.customRadio} />
              Panel Van
            </label>

            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="forms"
                value="integrated"
              />
              <span className={css.customRadio} />
              Integrated
            </label>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="forms"
                value="semi_integrated"
              />
              <span className={css.customRadio} />
              Semi Integrated
            </label>
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Engine</legend>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="engines"
                value="diesel"
              />
              <span className={css.customRadio} />
              Diesel
            </label>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="engines"
                value="petrol"
              />
              <span className={css.customRadio} />
              Petrol
            </label>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="engines"
                value="hybrid"
              />
              <span className={css.customRadio} />
              Hybrid
            </label>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="engines"
                value="electric"
              />
              <span className={css.customRadio} />
              Electric
            </label>
          </fieldset>

          <fieldset className={css.fieldset}>
            <legend className={css.legend}>Transmission</legend>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="transmissions"
                value="automatic"
              />
              <span className={css.customRadio} />
              Automatic
            </label>
            <label className={css.radioFieldLabel}>
              <Field
                className={css.radioInput}
                type="radio"
                name="transmissions"
                value="manual"
              />
              <span className={css.customRadio} />
              Manual
            </label>
          </fieldset>
        </div>
        <div className={css.btnWrapper}>
          <button className={`greenBtn ${css.submitBtn}`} type="submit">
            Search
          </button>
          <button className={css.clearBtn} type="reset">
            <IoMdClose width="24" height="24" className={css.clearBtnIcon} />
            Clear filters
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default FilterBar;
