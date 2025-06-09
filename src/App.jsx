//App.jsx
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./components/tabs/Form";
import Http from "./components/tabs/HttpArtists";
import Hook from "./components/tabs/Hook";

function App() {
  //JSX
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>HTTP</Tab>
        <Tab>Hook</Tab>
      </TabList>

      <TabPanel>
        <Form />
      </TabPanel>
      <TabPanel>
        <Http />
      </TabPanel>
      <TabPanel>
        <Hook />
      </TabPanel>
    </Tabs>
  );
}

export default App;
