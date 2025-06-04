import { useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import LoginForm from "./components/LoginForm/LoginForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import EmailForm from "./components/EmailForm/EmailForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import FeedbackForm from "./components/FeedbackForm/FeedbackForm";
import ContactForm from "./components/ContactForm/ContactForm";
import BookingForm from "./components/BookingForm/BookingForm";
import SignupForm from "./components/SignupForm/SignupForm";
import SurveyForm from "./components/SurveyForm/SurveyForm";
import WorkshopForm from "./components/WorkshopForm/WorkshopForm";
import SimpleFormikForm from "./components/SimpleFormikForm/SimpleFormikForm";
import RadioFormikForm from "./components/RadioFormikForm/RadioFormikForm";

function App() {
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

  //JSX
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
}

export default App;
