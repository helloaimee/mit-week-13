import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const App = () => {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    validationSchema: Yup.object({
      emailField: Yup.string().email('Username should be an email').required('Field required'),
      pswField: Yup.string().required('Field required'),
    }),
    onSubmit: values => {
      alert("Login Successful");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input
        id="emailField"
        name="emailField"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.emailField}
      />
      {formik.touched.emailField && formik.errors.emailField ? (
      <div id="emailError">{formik.errors.emailField}</div>
      ) : null}

      <div>Password</div>
      <input
        id="pswField"
        name="pswField"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pswField}
      />
      {formik.touched.pswField && formik.errors.pswField ? (
      <div id="pswError">{formik.errors.pswField}</div>
      ) : null}

      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
};

export default App;
