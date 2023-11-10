import { createContext,useState } from "react";
import data from '../data.js' 

export const SiteContext = createContext();

export const SiteContextProvider = ({children})=>{
    const [lang, setLang] = useState("tr");
    const [theme, setTheme] = useState("light");
    const [siteTexts,setSiteTexts] = useState(data)

    const texts = siteTexts[lang]
    

    return (
        <SiteContext.Provider value = {{lang: lang, theme: theme, setTheme, setLang, texts}}>
            {children}
        </SiteContext.Provider>
    )
}