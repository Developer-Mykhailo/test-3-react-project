import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  return (
    <Container>
      <Description />
      <Options />

      <Notification />

      <Feedback />
    </Container>
  );
}

export default App;
