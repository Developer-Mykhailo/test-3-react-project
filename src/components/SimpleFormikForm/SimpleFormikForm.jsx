import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./SimpleFormikForm.module.css";
import * as Yup from "yup";

// state
const initialValues = {
  name: "",
  email: "",
};

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
});

const SimpleFormikForm = () => {
  // unique id
  const name_id = useId();
  const email_id = useId();

  // handler
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  //JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={s.form}>
        <h3 className={s.title}>SimpleFormikForm</h3>

        <div className={s.field_wrap}>
          <label htmlFor={name_id}>Username</label>
          <Field name="name" type="text" id={name_id} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={s.field_wrap}>
          <label htmlFor={email_id}>Email</label>
          <Field name="email" type="email" id={email_id} />
          <ErrorMessage name="email" component="span" />
        </div>

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default SimpleFormikForm;
