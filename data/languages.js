import enData from "react-intl/locale-data/en"
import frData from "react-intl/locale-data/fr"

import en from "./messages/en.json"
import fr from "./messages/fr.json"

export const config = {
  locales: ["en", "fr"],
  defaultLocale: "en",
}

export const messages = {
  en: en,
  fr: fr,
}

export const localeData = [
  ...enData, 
  ...frData,
]