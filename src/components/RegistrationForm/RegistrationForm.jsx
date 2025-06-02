import { useState } from "react";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  // state
  const [formData, setFormData] = useState({ name: "", email: "" });
  const { name, email } = formData;

  //handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registered with: ${formData.name}, ${formData.email}`);
    setFormData({ name: "", email: "" });
  };

  // JSX
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="email" name="email" value={email} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
