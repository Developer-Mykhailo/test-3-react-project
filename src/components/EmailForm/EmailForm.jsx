import { useState } from "react";
import s from "./EmailForm.module.css";

const EmailForm = () => {
  // state
  const [email, setEmail] = useState("");

  // handlers
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  // JSX
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="email" name="email" value={email} onChange={handleChange} />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailForm;
