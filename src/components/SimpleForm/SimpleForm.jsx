import { useState } from "react";
import s from "./SimpleForm.module.css";

const SimpleForm = () => {
  const [name, setName] = useState("");

  // handlers
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", name);
    setName("");
  };

  // JSX
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default SimpleForm;
