import { useSelector } from 'react-redux'

import type { RootState } from '../../store/configureStore'

export const useCharacters = () => useSelector((state: RootState) => state.characters)
export const useCurrentCharacter = () => useSelector((state: RootState) => state.characters.currentCharacter)
