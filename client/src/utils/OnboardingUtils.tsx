import type { Dispatch } from 'react'

import { track } from 'insights-js'

import { setOnboardingStep } from '../slices/onboarding/onboardingSlice'

export const setOnboardingProgress = (dispatch: Dispatch<any>, step: number): void => {
  dispatch(setOnboardingStep(step))
  track({
    id: 'onboarding-step-completed',
    parameters: {
      step: step.toString(),
    },
  })
}
