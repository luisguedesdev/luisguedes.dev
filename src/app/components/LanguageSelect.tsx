type Language = 'pt' | 'en'

type LanguageSelectProps = {
  language: Language
  setLanguage: (lang: Language) => void
}

export default function LanguageSelect({ language, setLanguage }: LanguageSelectProps) {
  return (
    <select
      value={language}
      onChange={e => setLanguage(e.target.value as Language)}
      className="p-2 rounded border"
    >
      <option value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </select>
  )
}
