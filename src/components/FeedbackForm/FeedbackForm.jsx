import { useState } from "react";
import s from "./FeedbackForm.module.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = feedback;

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({
    //   "Feedback from:": `${name}, ${email}`,
    //   "Message:": message,
    // });
    console.log(`Feedback from: ${name} ( ${email} )`);
    console.log(`Message: ${message}`);
    setFeedback({ name: "", email: "", message: "" });
  };

  //JSX
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} />
      <input type="email" name="email" value={email} onChange={handleChange} />
      <textarea
        name="message"
        value={message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default FeedbackForm;
