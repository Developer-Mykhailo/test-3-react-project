//LanguageContext.jsx

import { createContext, useState } from "react";

// eslint-disable-next-line
export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ua");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      return prev === "ua" ? "en" : "ua";
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
