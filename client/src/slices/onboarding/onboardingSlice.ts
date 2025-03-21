import { createSlice } from '@reduxjs/toolkit'

import type { Scenario } from '../types'

interface OnboardingState {
  scenario?: Scenario
  currentStep: number
  isCompleted: boolean
}

const initialState: OnboardingState = {
  currentStep: 0,
  isCompleted: false,
}

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding(state) {
      state.isCompleted = true
    },
    setOnboardingStep(state, action) {
      state.currentStep = action.payload
    },
    setScenario(state, action) {
      state.scenario = action.payload
    },
    resetOnboarding(state) {
      state.scenario = undefined
      state.currentStep = 0
      state.isCompleted = false
    },
  },
})

export const { completeOnboarding, setOnboardingStep, setScenario } = onboardingSlice.actions

export default onboardingSlice.reducer
