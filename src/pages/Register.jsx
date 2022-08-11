import React from "react";
import { Formik, Form } from "formik";

const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        // validationSchema={{}}
        onSubmit={(values, actions) => {
          alert(`${values.email} ve ${values.password}`);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <Form
            className=" m-auto mt-5 bg-light"
            style={{ height: "35rem", width: "32rem" }}
          >
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg"
                alt=""
                width="200px"
                className="m-auto d-block rounded-5"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" class="btn btn-primary d-block mx-auto mt-3">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
