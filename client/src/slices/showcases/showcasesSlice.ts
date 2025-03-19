import type { CustomCharacter } from '../types'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

import { getOrCreateCredDefId } from '../../api/CredentialApi'

import { fetchAllCharacters, fetchCharacterById, fetchShowcaseBySlug } from './showcasesThunks'

interface ShowcasesState {
  characters: CustomCharacter[]
  uploadedCharacter?: CustomCharacter
  currentCharacter?: CustomCharacter


  showcase?: any // TODO type
  currentPersona?: CustomCharacter


  isUploading: boolean
  isLoading: boolean
}

const initialState: ShowcasesState = {
  characters: [],
  uploadedCharacter: undefined,
  currentCharacter: undefined,
  isUploading: false,
  isLoading: false,
}

const showcaseSlice = createSlice({
  name: 'showcase',
  initialState,
  reducers: {
    uploadCharacter: (state, action: PayloadAction<{ character: CustomCharacter; callback?: () => void }>) => {
      state.uploadedCharacter = action.payload.character
      const promises: Promise<any>[] = []
      state.isUploading = true
      action.payload.character.onboarding
        .filter((screen) => screen.credentials)
        .forEach((screen) => screen.credentials?.forEach((cred) => promises.push(getOrCreateCredDefId(cred))))
      Promise.all(promises).then(() => {
        if (action.payload.callback) {
          action.payload.callback()
        }
      })
    },
    setUploadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isUploading = action.payload
    },
    setPersona: (state, action: PayloadAction<any>) => { //CustomCharacter
      state.currentPersona = action.payload //currentCharacter
    },
    removeCharacter: (state) => {
      state.currentPersona = undefined //currentCharacter
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCharacters.pending, (state) => {
        console.log(`CHAR REDUCER fetchAllCharacters`)
        state.isLoading = true
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        console.log(`CHAR REDUCER fetchAllCharacters`)
        state.isLoading = false
        state.characters = action.payload
      })
      .addCase(fetchCharacterById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharacterById.fulfilled, (state, action) => {
        state.isLoading = false
        state.currentCharacter = action.payload
      })

      .addCase(fetchShowcaseBySlug.pending, (state): void => {
        console.log(`fetchShowcaseBySlug PENDING`)
        state.isLoading = true
      })
      .addCase(fetchShowcaseBySlug.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(`fetchShowcaseBySlug FULFILLED: ${JSON.stringify(action.payload)}`)
        state.showcase = action.payload
      })
  },
})

export const {
  setPersona,
  removeCharacter,
  uploadCharacter,
  setUploadingStatus
} = showcaseSlice.actions

export default showcaseSlice.reducer
