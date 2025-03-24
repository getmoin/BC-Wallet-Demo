'use client'

// import { IssuanceStepAdd } from "./issue-step-edit";
// import { CreateNewStep } from "./create-step";

import { BasicStepEdit } from '@/components/scenario-screen/basic-step-edit'
import { ChooseStepType } from '@/components/scenario-screen/choose-step-type'
import { ProofStepEdit } from '@/components/scenario-screen/proof-step-edit'
import { ScenarioEdit } from '@/components/scenario-screen/scenario-edit'
import { usePresentationAdapter } from '@/hooks/use-presentation-adapter'
import { useTranslations } from 'next-intl'

import { NoSelection } from '../credentials/no-selection'
import { BasicStepAdd } from './basic-step-add'

export const CreateScenariosStepsScreen = () => {
  const t = useTranslations()
  const { stepState, activePersonaId } = usePresentationAdapter()

  return (
    <div
      id="editStep"
      className=" bg-white dark:bg-dark-bg-secondary text-light-text dark:text-dark-text p-6 rounded-md"
    >
      {!activePersonaId && (
        <NoSelection
          text={
            // t("onboarding.select_persona_message") ||
            'Please select a persona from the left to edit their onboarding steps.'
          }
        />
      )}
      {activePersonaId && (stepState === null || stepState === 'no-selection') && (
        <NoSelection
          text={
            t('onboarding.no_step_selected_message') ||
            'No step selected. Please select a step from the left panel or create a new one.'
          }
        />
      )}
      {activePersonaId && stepState === 'creating-new' && <BasicStepAdd />}
      {activePersonaId && stepState === 'editing-basic' && <BasicStepAdd />}
      {activePersonaId && stepState === 'editing-issue' && <BasicStepEdit />}
    </div>
  )
}
