import { createSlice } from '@reduxjs/toolkit'
import {Scenario} from '../types';

interface OnboardingState {
  // onboardingStep: string
  // connectionId?: string


  scenario?: Scenario

  currentStep: number
  // maxSteps?: number


  isCompleted: boolean
}

const initialState: OnboardingState = {
  // onboardingStep: 'PICK_CHARACTER',
  // connectionId: undefined,
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
      //state.onboardingStep = action.payload

      state.currentStep = action.payload
    },
    setScenario(state, action) {
      //state.onboardingStep = action.payload
      console.log(`SETTING SCENARIO IN onboardingSlice`)
      state.scenario = action.payload
    },
    // setMaxOnboardingStep(state, action) {
    //   //state.onboardingStep = action.payload
    //
    //   state.maxSteps = action.payload
    // },
    // setOnboardingConnectionId(state, action) {
    //   state.connectionId = action.payload
    // },
    resetOnboarding(state) {
      // state.connectionId = undefined
      // state.onboardingStep = 'PICK_CHARACTER'
      state.scenario = undefined
      state.currentStep = 0
      state.isCompleted = false
    },
  },
})

export const {
  completeOnboarding,
  setOnboardingStep,
  setScenario,
  //setOnboardingConnectionId, resetOnboarding
} = onboardingSlice.actions

export default onboardingSlice.reducer
