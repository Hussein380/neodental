"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/types";
import { en } from "@/content/translations/en";
import { sw } from "@/content/translations/sw";
import { so } from "@/content/translations/so";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof en;
}

const translations: Record<Language, typeof en> = {
  en,
  sw,
  so,
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: en,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("neodental_lang") as Language;
      if (saved && ["en", "sw", "so"].includes(saved)) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("neodental_lang", lang);
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] || en,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
