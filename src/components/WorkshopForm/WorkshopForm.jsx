import iziToast from "izitoast";
import { useEffect, useId, useState } from "react";

const WorkshopForm = () => {
  // unique id
  const name_id = useId();
  const email_id = useId();
  const gender_male_id = useId();
  const gender_female_id = useId();
  const html_id = useId();
  const css_id = useId();
  const react_id = useId();
  const experience_id = useId();
  const comment_id = useId();

  // state
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          email: "",
          gender: "",
          topics: [],
          experience: "",
          message: "",
        };
  });

  const { fullName, email, gender, topics, experience, message } = formData;

  useEffect(() => {
    const isEmpty =
      !fullName &&
      !email &&
      !gender &&
      !experience &&
      topics.length === 0 &&
      !message;
    if (!isEmpty) {
      localStorage.setItem("userData", JSON.stringify(formData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [formData, fullName, email, gender, topics, experience, message]);

  //handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, topics: [...prev.topics, value] };
      } else {
        return {
          ...prev,
          topics: prev.topics.filter((topic) => topic !== value),
        };
      }
    });
  };

  //SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((topics.length === 0, !gender)) {
      iziToast.warning({
        message: "Make your choise",
        position: "center",
      });
      return;
    }
    console.log(formData);
    localStorage.removeItem("userData");
    setFormData({
      fullName: "",
      email: "",
      gender: "",
      topics: [],
      experience: "",
      message: "",
    });
  };

  // JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={name_id}>Full Name: </label>
          <input
            onChange={handleChange}
            id={name_id}
            type="text"
            name="fullName"
            value={fullName}
            required
          />

          <label htmlFor={email_id}>Email: </label>
          <input
            onChange={handleChange}
            id={email_id}
            type="email"
            name="email"
            value={email}
            required
          />
        </div>

        {/* -----GHENDER----------- */}
        <div>
          <label htmlFor={gender_male_id}>Male: </label>
          <input
            onChange={handleChange}
            id={gender_male_id}
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
          />

          <label htmlFor={gender_female_id}>Famale: </label>
          <input
            onChange={handleChange}
            id={gender_female_id}
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
          />
        </div>

        {/* -------TOPICS--------- */}
        <div>
          <label htmlFor={html_id}>HTML</label>
          <input
            onChange={handleCheckBox}
            id={html_id}
            type="checkbox"
            name="html"
            value="html"
            checked={topics.includes("html")}
          />

          <label htmlFor={css_id}>CSS</label>
          <input
            onChange={handleCheckBox}
            id={css_id}
            type="checkbox"
            name="css"
            value="css"
            checked={topics.includes("css")}
          />

          <label htmlFor={react_id}>React</label>
          <input
            onChange={handleCheckBox}
            id={react_id}
            type="checkbox"
            name="react"
            value="react"
            checked={topics.includes("react")}
          />
        </div>

        {/* -------select--------- */}
        <div>
          <label htmlFor={experience_id}></label>
          <select
            onChange={handleChange}
            id={experience_id}
            name="experience"
            value={experience}
            required
          >
            <option value="" disabled>
              Select experience
            </option>
            <option value="beginner">beginner</option>
            <option value="intermedia">intermedia</option>
            <option value="advanced">advanced</option>
          </select>
        </div>

        <textarea
          onChange={handleChange}
          name="message"
          value={message}
          id={comment_id}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default WorkshopForm;
