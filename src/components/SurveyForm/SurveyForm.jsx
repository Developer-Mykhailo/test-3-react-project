import React, { useEffect, useId, useState } from "react";
import s from "./SurveyForm.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const SurveyForm = () => {
  const nameId = useId();
  const genderMaleId = useId();
  const genderFemaleId = useId();
  const commentId = useId();

  // satte
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("form-data");
    return savedData
      ? JSON.parse(savedData)
      : { name: "", gender: "", comment: "" };
  });
  const { name, gender, comment } = formData;

  useEffect(() => {
    const isEmpty = !formData.name && !formData.gender;
    if (!isEmpty) {
      localStorage.setItem("form-data", JSON.stringify(formData));
    } else {
      localStorage.removeItem("form-data");
    }
  }, [formData]);

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      iziToast.warning({
        message: "Make your choice",
        // position: "center",
      });
      return;
    }

    console.log(name, gender, comment);
    setFormData({ name: "", gender: "", comment: "" });
    localStorage.removeItem("form-data");

    iziToast.success({
      message: "Form submitted successfully!",
      position: "topRight",
    });
  };

  //JSX
  return (
    <div className={s.wrap}>
      <form onSubmit={handleSubmit}>
        <label className={s.name} htmlFor={nameId}>
          Name
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id={nameId}
          value={name}
          required
        />
        <div className={s.gender_wrap}>
          <p>Gender:</p>
          <label htmlFor={genderMaleId}>Male</label>
          <input
            id={genderMaleId}
            name="gender"
            onChange={handleChange}
            type="radio"
            value="male"
            checked={gender === "male"}
          />
          <label htmlFor={genderFemaleId}>Female</label>
          <input
            id={genderFemaleId}
            onChange={handleChange}
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
          />
        </div>
        <div className={s.comment_wrap}>
          <textarea
            className={s.comment}
            onChange={handleChange}
            name="comment"
            id={commentId}
            value={comment}
          ></textarea>
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
