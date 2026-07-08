import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import en from "@/locales/en.json"
import ua from "@/locales/ua.json"

export type Locale = "en" | "ua"

const dictionaries: Record<Locale, typeof en> = { en, ua }

const STORAGE_KEY = "namlab-locale"

function readStoredLocale(): Locale | null {
  // localStorage is unavailable in some sandboxed previews - treat it as progressive enhancement
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === "en" || stored === "ua" ? stored : null
  } catch {
    return null
  }
}

function storeLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // ignore - state alone is enough
  }
}

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  /** Resolve a dot-path key like "hero.subtitle" to a translated string. */
  t: (key: string) => string
  dict: typeof en
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? "en")

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "ua" ? "uk" : "en"
    document.title = dictionaries[locale].meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute("content", dictionaries[locale].meta.description)
  }, [locale])

  const t = useCallback(
    (key: string): string => {
      const value = key
        .split(".")
        .reduce<unknown>((node, part) => (node && typeof node === "object" ? (node as Record<string, unknown>)[part] : undefined), dictionaries[locale])
      return typeof value === "string" ? value : key
    },
    [locale],
  )

  return <I18nContext.Provider value={{ locale, setLocale, t, dict: dictionaries[locale] }}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- hook and provider intentionally co-located
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}
