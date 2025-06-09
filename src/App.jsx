//App.jsx
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./components/tabs/Form";
import Http from "./components/tabs/HttpArtists";

function App() {
  //JSX
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>HTTP</Tab>
      </TabList>

      <TabPanel>
        <Form />
      </TabPanel>
      <TabPanel>
        <Http />
      </TabPanel>
    </Tabs>
  );
}

export default App;
