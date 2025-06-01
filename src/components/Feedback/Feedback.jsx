import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={s.feedback_wrap}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive ? positive : 0}%</p>
    </div>
  );
};

export default Feedback;
