import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BackButton } from '../../../components/BackButton'
import { Button } from '../../../components/Button'
import { fadeDelay, fadeExit } from '../../../FramerAnimations'
import { SafeAnimatePresence } from '../../../utils/Helpers'

export interface Props {
  currentStep: number
  maxSteps?: number
  addOnboardingStep(): void
  removeOnboardingStep(): void
  forwardDisabled: boolean
  backDisabled: boolean
  onboardingCompleted(): void
}

export const OnboardingBottomNav: React.FC<Props> = ({
  currentStep,
  maxSteps,
  addOnboardingStep,
  removeOnboardingStep,
  forwardDisabled,
  backDisabled,
  onboardingCompleted,
}) => {
  const [label, setLabel] = useState('NEXT')
  const isCompleted = maxSteps && currentStep === maxSteps

  useEffect(() => {
    if (isCompleted) {
      setLabel('FINISH')
    // } else if (onboardingStep === 'CHOOSE_WALLET') {
    //   setLabel('SKIP')
    } else {
      setLabel('NEXT')
    }
  }, [currentStep])

  return (
    <motion.div
      variants={fadeDelay}
      initial="hidden"
      animate="show"
      exit="exit"
      className="flex w-full justify-between mb-4 h-8 self-end select-none"
    >
      <div className="flex self-center">
        <BackButton onClick={removeOnboardingStep} disabled={backDisabled} data-cy="prev-onboarding-step" />
      </div>
      <SafeAnimatePresence mode="wait">
        <motion.div variants={fadeExit} initial="hidden" animate="show" exit="exit" data-cy="next-onboarding-step">
          <Button
            onClick={isCompleted ? onboardingCompleted : addOnboardingStep}
            text={label}
            disabled={forwardDisabled}
          />
        </motion.div>
      </SafeAnimatePresence>
    </motion.div>
  )
}
