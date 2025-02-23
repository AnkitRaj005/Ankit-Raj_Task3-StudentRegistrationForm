import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const StudentRegistrationForm = () => {
 
  const initialValues = {
    name: "",
    age: "",
    email: "",
    course: "",
  };

  
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    age: Yup.number()
      .positive("Age must be a positive number")
      .integer("Age must be a whole number")
      .required("Age is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    course: Yup.string().required("Course selection is required"),
  });

  
  const onSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    alert("Registration Successful!"); 
    resetForm(); 
  };

  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {/* Name Field */}
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            {/* Age Field */}
            <div>
              <label htmlFor="age">Age:</label>
              <Field type="number" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            {/* Course Selection */}
            <div>
              <label htmlFor="course">Course:</label>
              <Field as="select" id="course" name="course">
                <option value="">Select a course</option>
                <option value="math">Math</option>
                <option value="science">Science</option>
                <option value="history">History</option>
              </Field>
              <ErrorMessage name="course" component="div" className="error" />
            </div>

            {/* Submit Button */}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentRegistrationForm;
