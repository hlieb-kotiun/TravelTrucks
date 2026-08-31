"use client";

import { Field, Form, Formik, FormikHelpers } from "formik";
import s from "./BookingForm.module.css";
import * as Yup from "yup";

interface InitialValuesType {
  name: string;
  email: string;
}

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const bookingSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Please enter your name.")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Please enter your name.",
      ),
    email: Yup.string()
      .email("Invalid email")
      .required("Please enter your email."),
  });

  const handleSubmit = (
    values: InitialValuesType,
    helper: FormikHelpers<InitialValuesType>,
  ) => {
    console.log("Request sent!");
  };

  return (
    <div className={s.formContainer}>
      <h3 className={s.title}>Book your campervan now</h3>
      <p className={s.subtitle}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <Form className={s.form}>
          <div className={s.inputsContainer}>
            <label>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Name*"
              />
            </label>
            <label>
              <Field
                className={s.input}
                type="email"
                name="email"
                placeholder="Email*"
              />
            </label>
          </div>
          <button className={`greenBtn ${s.sendBtn}`} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
