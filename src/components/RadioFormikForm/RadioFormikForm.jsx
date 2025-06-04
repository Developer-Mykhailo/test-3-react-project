import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./RadioFormikForm.module.css";
import * as Yup from "yup";
import iziToast from "izitoast";

// state
const initialValues = {
  fullname: "",
  gender: "",
};

// validation
const formSchema = Yup.object().shape({
  fullname: Yup.string().required("must be filled in"),
  gender: Yup.string().required("choise your gender"),
});

const RadioFormikForm = () => {
  // unique id
  const fullName_id = useId();
  const male_id = useId();
  const female_id = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    iziToast.success({
      message: "Submitted successfully",
      position: "center",
    });
  };

  //JSX
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={s.form}>
        <h3 className={s.title}>RadioFormikForm</h3>
        <div className={s.fullName_wrap}>
          <label htmlFor={fullName_id}>Full Name</label>
          <Field type="text" name="fullname" id={fullName_id} />
          <ErrorMessage name="fullname">
            {(msg) => <span className={s.error}>{msg}</span>}
          </ErrorMessage>
        </div>

        {/* GENDER */}
        <div className={s.gender_wrap}>
          <label htmlFor={male_id}>Male </label>
          <Field type="radio" name="gender" value="male" id={male_id} />

          <label htmlFor={female_id}>Female </label>
          <Field type="radio" name="gender" value="female" id={female_id} />
          <ErrorMessage name="gender">
            {(msg) => <span className={s.error}>{msg}</span>}
          </ErrorMessage>
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default RadioFormikForm;
