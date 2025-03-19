import React from 'react'
import { useDarkMode } from '../../../hooks/useDarkMode'

export interface Props {
  scenario: any
  step: any//ProgressBarStep
  currentStep: string
}

export const StepperItem: React.FC<Props> = ({ step, currentStep, scenario }) => {
  const darkMode = useDarkMode()
  const stepNames = scenario.steps.map((step: any) => step.screenId)
  const currentStepIsEqual = step.screenId === currentStep
  const currentStepIsNotEqual = step.screenId !== currentStep
  const currentStepIsHigher = stepNames.indexOf(currentStep) > stepNames.indexOf(step.screenId)
  const currentStepIsLower = stepNames.indexOf(currentStep) < stepNames.indexOf(step.screenId)
  return (
    <>
      <div className="flex text-grey dark:text-white relative">
        <div
          className={`rounded-full transition duration-1000 ease-in-out py-3 h-12 w-12 border-2 ${
            currentStepIsEqual
              ? 'bg-white dark:bg-bcgov-black border-2 border-bcgov-blue dark:border-bcgov-gold '
              : `${currentStepIsLower && currentStepIsNotEqual ? 'grayscale' : ''}`
          } ${
            currentStepIsHigher && currentStepIsNotEqual
              ? ' border-2 border-bcgov-blue dark:border-bcgov-gold bg-white dark:bg-bcgov-black text-white'
              : ''
          } `}
        >
          <img
            alt={step.title}
            src={darkMode ? `http://localhost:3001/assets/${step.iconDark}/file` : `http://localhost:3001/assets/${step.iconLight}/file`}
            className="m-auto h-5"
          />
        </div>
      </div>
      {step.screenId !== 'SETUP_COMPLETED' && (
        <div
          className={`flex-auto  transition duration-300 ease-in-out  ${
            currentStepIsHigher && currentStepIsNotEqual
              ? ' border-t-4 border-bcgov-blue dark:border-bcgov-gold bg-bcgov-blue dark:bg-bcgov-gold'
              : ' border-t-2 border-grey bg-grey'
          }`}
        />
      )}
    </>
  )
}
