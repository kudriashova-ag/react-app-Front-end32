import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./Form.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phones: [
    {
      phone: "+38",
    },
  ],
};

const submitHandler = (values, formikBag) => {
  console.log(formikBag);
  // formikBag.setFieldValue('name', 'ewrwerwe')
  formikBag.resetForm();
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Name is required"),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  phones: Yup.array().of(
    Yup.object().shape({
      phone: Yup.string()
        .matches(
          /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
          'Phone is invalid'
        )
        .required("Phone is required"),
    })
  ),
});

const Registration = () => {
  return (
    <div>
      <h1 className={styles.title}>Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={SignupSchema}
        validationOnChange={true}
      >
        {({ values, validateField, handleChange }) => (
          <Form>
            <div>
              <Field name="name" placeholder="Name:" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field type="email" name="email" placeholder="Email:" />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password:" />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            <FieldArray name="phones">
              {({ push, remove }) => (
                <div>
                  {values.phones.map((phone, index) => (
                    <div key={index}>
                      <Field
                        name={`phones[${index}].phone`}
                        //onChange={() => { validateField('name'); handleChange() }}
                      />
                      {index !== 0 && (
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                      )}
                      <ErrorMessage
                        name={`phones[${index}].phone`}
                        component="div"
                        className={styles.error}
                      />
                    </div>
                  ))}

                  {values.phones.length < 5 && (
                    <button
                      type="button"
                      onClick={() => push({ phone: "+38" })}
                    >
                      Add Phone
                    </button>
                  )}
                </div>
              )}
            </FieldArray>

            <Field type="submit" value="Sing Up" id="registr" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
