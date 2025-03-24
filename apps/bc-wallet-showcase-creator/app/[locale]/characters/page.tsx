import CharactersPage from '@/components/character-screen/characters'
import type { PageParams } from '@/types'
import { setRequestLocale } from 'next-intl/server'

export default async function CharacterPageMain({ params }: { params: PageParams }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div>
      <CharactersPage />
    </div>
  )
}
