//Context

import LanguageProvider from "../../context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Context = () => {
  return (
    <div>
      <h4>Context</h4>
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    </div>
  );
};

export default Context;
