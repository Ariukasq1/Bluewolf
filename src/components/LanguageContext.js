import React from 'react';
import Config from "../config";

const LanguageContext = React.createContext({});
export const LanguageConsumer = LanguageContext.Consumer;

export const LanguageProvider = (props) => {
  const { lang } = props;

  const apiUrl = Config(lang).apiUrl;

  return (
    <LanguageContext.Provider value={{ lang, apiUrl }}>
      {props.children}
    </ LanguageContext.Provider>
  )
}
