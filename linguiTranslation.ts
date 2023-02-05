import { en, es } from "make-plural/plurals";

import { I18n } from "@lingui/core";

export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    es: { plurals: es },
    en: { plurals: en },
    pseudo: { plurals: es }
  })
}

export async function loadTranslation(locale: string, isProduction = true) {
  let data
  if (isProduction) {
    data = await import(`./translations/locales/${locale}/messages`)
  } else {
    data = await import(
      `@lingui/loader!./translations/locales/${locale}/messages.po`
    )
  }
  return data.messages
}
