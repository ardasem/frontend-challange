import { createContext, useState, useEffect } from "react";
import data from "../data.js";
import axios from "axios";

export const SiteContext = createContext();

export const SiteContextProvider = ({ children }) => {
  const [lang, setLang] = useState("tr");
  const [theme, setTheme] = useState("light");
  const [siteTexts, setSiteTexts] = useState(data);
  const [texts,setTexts] = useState(siteTexts[lang])

  useEffect(()=>{
    axios.post('https://reqres.in/api/users', data)
    .then(function (response) {
        console.log('context',response.data)
        setSiteTexts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[])

  useEffect(() => {
    
    setTexts(siteTexts[lang]);
  }, [lang]);

  return (
    <SiteContext.Provider
      value={{ lang: lang, theme: theme, setTheme, setLang,setSiteTexts,siteTexts, texts }}
    >
      {children}
    </SiteContext.Provider>
  );
};
