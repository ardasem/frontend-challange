import { createContext, useState, useEffect } from "react";
import data from "../data.js";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const [theme, setTheme] = useState("light");
  const [siteTexts, setSiteTexts] = useState(data);
  const [texts,setTexts] = useState(siteTexts[lang])

  useEffect(() => {
    setTexts(siteTexts[lang]);
  }, [lang]);

  return (
    <SiteContext.Provider
      value={{ lang: lang, theme: theme, setTheme, setLang, texts }}
    >
      {children}
    </SiteContext.Provider>
  );
};
