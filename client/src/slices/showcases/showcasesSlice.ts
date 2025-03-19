import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { fetchShowcaseBySlug } from './showcasesThunks'

interface ShowcasesState {
  showcase?: any // TODO type
  uploadedShowcase?: any
  currentPersona?: any
  isUploading: boolean
  isLoading: boolean
}

const initialState: ShowcasesState = {
  isUploading: false,
  isLoading: false,
}

const showcaseSlice = createSlice({
  name: 'showcase',
  initialState,
  reducers: {
    clearShowcase: (state) => {
      state.showcase = undefined
    },
    uploadShowcase: (state, action: PayloadAction<{ showcase: any; callback?: () => void }>) => {
      state.uploadedShowcase = action.payload.showcase
      const promises: Promise<any>[] = []
      state.isUploading = true
      // action.payload.showcase.onboarding
      //   .filter((screen) => screen.credentials)
      //   .forEach((screen) => screen.credentials?.forEach((cred) => promises.push(getOrCreateCredDefId(cred))))
      Promise.all(promises).then(() => {
        if (action.payload.callback) {
          action.payload.callback()
        }
      })
    },
    setUploadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isUploading = action.payload
    },
    setPersona: (state, action: PayloadAction<any>) => {
      state.currentPersona = action.payload
    },
    removePersona: (state) => {
      state.currentPersona = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowcaseBySlug.pending, (state): void => {
        state.isLoading = true
      })
      .addCase(fetchShowcaseBySlug.fulfilled, (state, action) => {
        state.isLoading = false
        state.showcase = action.payload
      })
  },
})

export const {
  setPersona,
  removePersona,
  uploadShowcase,
  setUploadingStatus,
  clearShowcase
} = showcaseSlice.actions

export default showcaseSlice.reducer
