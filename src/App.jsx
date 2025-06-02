import { useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import LoginForm from "./components/LoginForm/LoginForm";
import SearchBar from "./components/SearchBar/SearchBar";

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

  //JSX
  return (
    <Container>
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

      <SearchBar />
    </Container>
  );
}

export default App;
