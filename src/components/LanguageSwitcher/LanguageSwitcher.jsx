//LanguageSwitcher.jsx

import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {language === "ua" ? "Ukraine" : "English"}</p>

      <button onClick={toggleLanguage}>Change Language</button>
    </div>
  );
};

export default LanguageSwitcher;
