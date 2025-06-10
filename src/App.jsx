//App.jsx
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Form from "./components/tabs/Form";
import Http from "./components/tabs/HttpArtists";
import Hook from "./components/tabs/Hook";
import Context from "./components/tabs/Context";

function App() {
  //JSX
  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>HTTP</Tab>
        <Tab>Hook</Tab>
        <Tab>Context</Tab>
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
      <TabPanel>
        <Context />
      </TabPanel>
    </Tabs>
  );
}

export default App;
