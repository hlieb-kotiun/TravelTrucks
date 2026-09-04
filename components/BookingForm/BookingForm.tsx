"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import s from "./BookingForm.module.css";
import { IoAlertCircleOutline } from "react-icons/io5";
import * as Yup from "yup";
import { bookCamper } from "@/lib/api/catalog";
import toast from "react-hot-toast";

interface InitialValuesType {
  name: string;
  email: string;
}

interface BookingFormProps {
  id: string;
}

const BookingForm = ({ id }: BookingFormProps) => {
  const initialValues = {
    name: "",
    email: "",
  };

  // const sendRequest = async () => {
  //   try {
  //     const res = await bookCamper(id);
  //     toast.success(res.message);
  //   } catch {
  //     toast.error("Oops, something went wrong!");
  //   }
  // };

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

  const handleSubmit = async (
    values: InitialValuesType,
    helper: FormikHelpers<InitialValuesType>,
  ) => {
    const name = values.name;
    const email = values.email;
    try {
      const res = await bookCamper(id, name, email);
      toast.success(res.message);
      helper.resetForm();
    } catch {
      toast.error("Oops, something went wrong!");
    }
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
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.inputsContainer}>
              <label>
                <Field
                  className={`${s.input} ${
                    touched.name && errors.name ? s.inputError : ""
                  }`}
                  type="text"
                  name="name"
                  placeholder="Name*"
                />

                <ErrorMessage
                  name="name"
                  component="p"
                  className={s.errorMessage}
                />
              </label>

              <label>
                <Field
                  className={`${s.input} ${
                    touched.email && errors.email ? s.inputError : ""
                  }`}
                  type="email"
                  name="email"
                  placeholder="Email*"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className={s.errorMessage}
                />
              </label>
            </div>

            <button className={`greenBtn ${s.sendBtn}`} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
