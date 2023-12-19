import "./CheckoutForm.css";
import axios from "axios";
import { useCart } from "./CartContext";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

const CheckoutForm = () => {
  const { cart, setOrdererInfo, openModal } = useCart();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    street: Yup.string().required("Street is required"),
    postalCode: Yup.string().required("Postal code is required"),
    city: Yup.string().required("City is required"),
  });

  const submitHandler = async (values, { setSubmitting }) => {
    const order = {
      order: {
        customer: {
          name: values.name,
          email: values.email,
          street: values.street,
          "postal-code": values.postalCode,
          city: values.city,
        },
        items: cart,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        order
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
      return;
    }

    setOrdererInfo({
      name: values.name,
      email: values.email,
      street: values.street,
      postalCode: values.postalCode,
      city: values.city,
    });

    openModal();
    setSubmitting(false);
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
      {({ isSubmitting, errors, touched }) => (
        <Form className="checkout__form">
          <div className="checkout__form-input-container">
            <div className="checkout__form-label-container">
              <label htmlFor="name" className="checkout__form-label">
                Name:
              </label>
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              type="text"
              id="name"
              name="name"
              className={
                errors.name && touched.name
                  ? "checkout__form-input-error"
                  : "checkout__form-input"
              }
            />
          </div>
          <div className="checkout__form-input-container">
            <div className="checkout__form-label-container">
              <label htmlFor="email" className="checkout__form-label">
                Email:
              </label>
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              type="email"
              id="email"
              name="email"
              className={
                errors.email && touched.email
                  ? "checkout__form-input-error"
                  : "checkout__form-input"
              }
            />
          </div>
          <div className="checkout__form-input-container">
            <div className="checkout__form-label-container">
              <label htmlFor="street" className="checkout__form-label">
                Street:
              </label>
              <ErrorMessage
                name="street"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              type="text"
              id="street"
              name="street"
              className={
                errors.street && touched.street
                  ? "checkout__form-input-error"
                  : "checkout__form-input"
              }
            />
          </div>
          <div className="checkout__form-input-container">
            <div className="checkout__form-label-container">
              <label htmlFor="postalCode" className="checkout__form-label">
                Postal-code:
              </label>
              <ErrorMessage
                name="postalCode"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              type="text"
              id="postalCode"
              name="postalCode"
              className={
                errors.postalCode && touched.postalCode
                  ? "checkout__form-input-error"
                  : "checkout__form-input"
              }
            />
          </div>
          <div className="checkout__form-input-container">
            <div className="checkout__form-label-container">
              <label htmlFor="city" className="checkout__form-label">
                City:
              </label>
              <ErrorMessage
                name="city"
                component="div"
                className="error-message"
              />
            </div>
            <Field
              type="text"
              id="city"
              name="city"
              className={
                errors.city && touched.city
                  ? "checkout__form-input-error"
                  : "checkout__form-input"
              }
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
