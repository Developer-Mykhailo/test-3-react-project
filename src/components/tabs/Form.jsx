import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import Container from "../Container/Container";
import Description from "../Description/Description";
import EmailForm from "../EmailForm/EmailForm";
import Feedback from "../Feedback/Feedback";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import LoginForm from "../LoginForm/LoginForm";
import Notification from "../Notification/Notification";
import Options from "../Options/Options";
import RadioFormikForm from "../RadioFormikForm/RadioFormikForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import SignupForm from "../SignupForm/SignupForm";
import SimpleForm from "../SimpleForm/SimpleForm";
import SimpleFormikForm from "../SimpleFormikForm/SimpleFormikForm";
import SurveyForm from "../SurveyForm/SurveyForm";
import WorkshopForm from "../WorkshopForm/WorkshopForm";
import BookingForm from "../BookingForm/BookingForm";
import SearchForm from "../SearchForm/SearchForm";

const Form = () => {
  // state
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback"); // from storage

    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  const { good, neutral, bad } = feedback; //  access to the values

  localStorage.setItem("feedback", JSON.stringify(feedback));

  // handlers
  const updateFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, bad: 0, neutral: 0 });
  };

  // derived values
  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  // form handler
  const handleLogin = (userData) => {
    console.log(userData);
  };

  const handleUserData = (userData) => {
    console.log(userData);
  };

  const handleBookingForm = (data) => {
    const { fullName, email, seats } = data;
    console.log(fullName);
    console.log(email);
    console.log(seats);
  };
  return (
    <Container>
      <RadioFormikForm />
      <SimpleFormikForm />
      <WorkshopForm />
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={total}
      />
      {total ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
      <LoginForm onLogin={handleLogin} />
      <SimpleForm />
      <EmailForm />
      <RegistrationForm />
      <FeedbackForm />
      <ContactForm onSubmitMessage={handleUserData} />
      <BookingForm onBook={handleBookingForm} />
      <SignupForm />
      <SurveyForm />
    </Container>
  );
};

export default Form;
