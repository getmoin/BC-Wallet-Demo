import { trackSelfDescribingEvent } from '@snowplow/browser-tracker'
import { AnimatePresence, motion } from 'framer-motion'
import React, {ReactElement, useEffect, useState} from 'react'
import { isMobile } from 'react-device-detect'
import { FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { fadeDelay, fadeExit } from '../../FramerAnimations'
import { Modal } from '../../components/Modal'
import { useAppDispatch } from '../../hooks/hooks'
import { clearConnection } from '../../slices/connection/connectionSlice'
import { useCredentials } from '../../slices/credentials/credentialsSelectors'
import { clearCredentials } from '../../slices/credentials/credentialsSlice'
import { completeOnboarding } from '../../slices/onboarding/onboardingSlice'
import { basePath } from '../../utils/BasePath'
import { setOnboardingProgress } from '../../utils/OnboardingUtils'
import { PersonaContent } from './components/PersonaContent'
import { OnboardingBottomNav } from './components/OnboardingBottomNav'
import { BasicSlide } from './steps/BasicSlide'
import { PickPersona } from './steps/PickPersona'
import { SetupCompleted } from './steps/SetupCompleted'
import { showcaseServerBaseUrl } from '../../api/BaseUrl'
import { Persona, Scenario, Step } from '../../slices/types'
import { setScenario } from '../../slices/onboarding/onboardingSlice'

export interface Props {
  scenarios: Scenario[]
  currentPersona?: Persona
  connectionId?: string
  connectionState?: string
  invitationUrl?: string
  currentStep: number
}

export const OnboardingContainer: React.FC<Props> = ({
  scenarios,
  currentPersona,
  currentStep,
  connectionId,
  connectionState,
  invitationUrl,
}) => {
  const dispatch = useAppDispatch()
  const { issuedCredentials } = useCredentials()
  const currentScenario = scenarios.find(scenario => scenario.persona?.id ===  currentPersona?.id) // TODO could be turned into useEffect

  useEffect((): void => {
    dispatch(setScenario(currentScenario))
  }, [currentScenario])

  //onst credentials: any[] = [] //currentPersona?.onboarding.find((step: any) => step.screenId === onboardingStep)?.credentials // TODO we need credentials
  //const credentialsAccepted = credentials?.every((cred: any) => issuedCredentials.includes(cred.name))
  const isBackDisabled = currentStep === 0 || currentStep === 1
  const isForwardDisabled = currentScenario?.steps.length === currentStep || currentStep === 0 // FIXME we could improve this step 0, as there is no real step 0, maybe it can just be undefined

  const nextOnboardingPage = (): void => {
    if (!currentScenario) {
      return
    }

    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:ca.bc.gov.digital/action/jsonschema/1-0-0',
        data: {
          action: 'next',
          path: currentPersona?.role.toLowerCase(),
          step: currentStep
        },
      },
    })

    if (!isForwardDisabled) {
      setOnboardingProgress(dispatch, currentStep + 1)
    }
  }

  const prevOnboardingPage = (): void => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:ca.bc.gov.digital/action/jsonschema/1-0-0',
        data: {
          action: 'back',
          path: currentPersona?.role.toLowerCase(),
          step: currentStep
        },
      },
    })

    if (!isBackDisabled) {
      setOnboardingProgress(dispatch, currentStep - 1)
    }
  }

  //override title and text content to make them character dependant
  const getStepContent = (currentStep: number) => {
    const stepContent = currentScenario?.steps.find((step: Step) => step.order === currentStep)
    if (stepContent) {
      return {
        title: stepContent.title,
        text: stepContent.description,
        credentials: [],//stepContent.credentials,
        issuer_name: '',//stepContent.issuer_name,
        asset: stepContent.asset,
      }
    }
    return { title: '', text: '' }
  }

  const getComponentToRender = (step: number): ReactElement => {
    const {
      text,
      title,
    } = getStepContent(step)

    if (step === 0 || step === 1) {
      return <PickPersona
          key={step}
          currentPersona={currentPersona}
          personas={scenarios.map((scenario) => scenario.persona)}
          title={title}
          text={text}
      />
    } else if (currentScenario?.steps.length === step) {
      return <SetupCompleted key={step} title={title} text={text} />
    } else {
      return <BasicSlide title={title} text={text} />
    }
  }

  const getImageToRender = (step: number) => {
    const { asset } = getStepContent(step)

    if (step === 0 || step === 1) {
      return <PersonaContent key={step} persona={currentPersona} />
    } else {
      return <motion.img
          variants={fadeExit}
          initial="hidden"
          animate="show"
          exit="exit"
          className="p-4"
          key={step}
          src={`${showcaseServerBaseUrl}/assets/${asset}/file`}
      />
    }
  }

  const navigate = useNavigate()
  const onboardingCompleted = () => {
    if (connectionId && currentPersona) {
      navigate(`${basePath}/dashboard`)
      dispatch(clearCredentials())
      dispatch(clearConnection())
      dispatch(completeOnboarding())
    } else {
      // something went wrong so reset
      navigate(`${basePath}/`)
      dispatch({ type: 'demo/RESET' })
    }
  }

  const style = isMobile ? { minHeight: '85vh' } : { minHeight: '680px', height: '75vh', maxHeight: '940px' }

  const [leaveModal, setLeaveModal] = useState(false)
  const LEAVE_MODAL_TITLE = 'Are you sure you want to leave?'
  const LEAVE_MODAL_DESCRIPTION = `You're progress will be lost and you'll be redirected to the homepage.`
  const showLeaveModal = () => setLeaveModal(true)
  const closeLeave = () => setLeaveModal(false)

  const leave = () => {
    trackSelfDescribingEvent({
      event: {
        schema: 'iglu:ca.bc.gov.digital/action/jsonschema/1-0-0',
        data: {
          action: 'leave',
          path: currentPersona?.role.toLowerCase(),
          step: currentStep,
        },
      },
    })
    navigate(`${basePath}/`)
    dispatch({ type: 'demo/RESET' })
  }

  return (
    <motion.div
      className="flex flex-row h-full justify-between bg-white dark:bg-bcgov-darkgrey rounded-lg p-2 w-full sxl:w-5/6 shadow"
      style={style}
    >
      <div className={`flex flex-col justify-items-end ${isMobile ? 'w-full' : 'w-2/3'} px-8`}>
        <div className="w-full">
          <motion.button onClick={showLeaveModal} variants={fadeDelay}>
            <FiLogOut className="inline h-12 cursor-pointer dark:text-white" />
          </motion.button>
        </div>
        <AnimatePresence mode="wait">{getComponentToRender(currentStep)}</AnimatePresence>
        <OnboardingBottomNav
          currentStep={currentStep}
          maxSteps={currentScenario?.steps.length}
          addOnboardingStep={nextOnboardingPage}
          removeOnboardingStep={prevOnboardingPage}
          forwardDisabled={isForwardDisabled}
          backDisabled={isBackDisabled}
          onboardingCompleted={onboardingCompleted}
        />
      </div>
      {!isMobile && (
        <div className="bg-bcgov-white dark:bg-bcgov-black hidden lg:flex lg:w-1/3 rounded-r-lg flex-col justify-center h-full select-none">
          <AnimatePresence mode="wait">{getImageToRender(currentStep)}</AnimatePresence>
        </div>
      )}
      {leaveModal && (
        <Modal title={LEAVE_MODAL_TITLE} description={LEAVE_MODAL_DESCRIPTION} onOk={leave} onCancel={closeLeave} />
      )}
    </motion.div>
  )
}
