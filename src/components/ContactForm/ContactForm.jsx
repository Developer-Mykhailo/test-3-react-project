import s from "./ContactForm.module.css";

const ContactForm = ({ onSubmitMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const { name, message } = form.elements;

    onSubmitMessage({
      name: name.value,
      message: message.value,
    });

    form.reset();
  };

  // JSX
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="name" />
      <textarea name="message"></textarea>
      <button>Send</button>
    </form>
  );
};

export default ContactForm;
