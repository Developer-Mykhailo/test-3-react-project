import s from "./BookingForm.module.css";

const BookingForm = ({ onBook }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { fullName, email, seats } = form.elements;

    onBook({
      fullName: fullName.value,
      email: email.value,
      seats: Number(seats.value),
    });
    form.reset();
  };
  //
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="fullName" placeholder="Full Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="number" name="seats" placeholder="Number" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default BookingForm;
