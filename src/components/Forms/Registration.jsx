import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const submitHandler = (values) => {
  console.log(values);
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Name is required"),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Registration = () => {
  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={SignupSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="name" placeholder="Name:" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <Field type="email" name="email" placeholder="Email:" />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password:" />
            </div>

            <Field type="submit" value="Sing Up" id="registr" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
