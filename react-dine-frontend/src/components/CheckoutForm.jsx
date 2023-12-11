import "./CheckoutForm.css";

import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const CheckoutForm = ({ cartItems }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    street: Yup.string().required("Street is required"),
    postalCode: Yup.string().required("Postal code is required"),
    city: Yup.string().required("City is required"),
  });

  const submitHandler = (values) => {
    const order = {
      customer: {
        name: values.name,
        email: values.email,
        street: values.street,
        "postal-code": values.postalCode,
        city: values.city,
      },
      items: [cartItems],
    };
    console.log("Form data:", values);
    console.log(order);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        street: "",
        postalCode: "",
        city: "",
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting }) => (
        <Form className="checkout__form">
          <div className="checkout__form-input-container">
            <label htmlFor="name" className="checkout__form-label">
              Name
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              className="checkout__form-input"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div className="checkout__form-input-container">
            <label htmlFor="email" className="checkout__form-label">
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="checkout__form-input"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>
          <div className="checkout__form-input-container">
            <label htmlFor="street" className="checkout__form-label">
              Street
            </label>
            <Field
              type="text"
              id="street"
              name="street"
              className="checkout__form-input"
            />
            <ErrorMessage
              name="street"
              component="div"
              className="error-message"
            />
          </div>
          <div className="checkout__form-input-container">
            <label htmlFor="postalCode" className="checkout__form-label">
              Postal-code
            </label>
            <Field
              type="text"
              id="postalCode"
              name="postalCode"
              className="checkout__form-input"
            />
            <ErrorMessage
              name="postalCode"
              component="div"
              className="error-message"
            />
          </div>
          <div className="checkout__form-input-container">
            <label htmlFor="city" className="checkout__form-label">
              City
            </label>
            <Field
              type="text"
              id="city"
              name="city"
              className="checkout__form-input"
            />
            <ErrorMessage
              name="city"
              component="div"
              className="error-message"
            />
          </div>
          <button
            type="submit"
            className="checkout__form-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
