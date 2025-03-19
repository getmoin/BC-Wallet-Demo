import { trackPageView } from '@snowplow/browser-tracker'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { page } from '../../FramerAnimations'
import { CustomUpload } from '../../components/CustomUpload'
import { useAppDispatch } from '../../hooks/hooks'
import { useTitle } from '../../hooks/useTitle'
import { useShowcases } from '../../slices/showcases/showcasesSelectors'
import { fetchShowcaseBySlug } from '../../slices/showcases/showcasesThunks'
import { useConnection } from '../../slices/connection/connectionSelectors'
import { clearConnection } from '../../slices/connection/connectionSlice'
import { clearCredentials } from '../../slices/credentials/credentialsSlice'
import { useOnboarding } from '../../slices/onboarding/onboardingSelectors'
import { completeOnboarding } from '../../slices/onboarding/onboardingSlice'
import { usePreferences } from '../../slices/preferences/preferencesSelectors'
import { fetchWallets } from '../../slices/wallets/walletsThunks'
import { basePath } from '../../utils/BasePath'
import { OnboardingComplete } from '../../utils/OnboardingUtils'
import { OnboardingContainer } from './OnboardingContainer'
import { Stepper } from './components/Stepper'
import { useSlug } from '../../utils/SlugUtils'
import { clearShowcase } from '../../slices/showcases/showcasesSlice'

export const OnboardingPage: React.FC = () => {
  useTitle('Get Started | BC Wallet Self-Sovereign Identity Demo')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { showcase, currentPersona } = useShowcases()
  const slug = useSlug()

  const { onboardingStep, isCompleted } = useOnboarding()
  const { state, invitationUrl, id } = useConnection()
  const { characterUploadEnabled, showHiddenUseCases } = usePreferences()
  const [mounted, setMounted] = useState(false)
  const [currentSlug, setCurrentSlug] = useState<string | null>(null)

  useEffect(() => {
    if ((OnboardingComplete(onboardingStep) || isCompleted) && showcase) {
      dispatch(completeOnboarding())
      dispatch(clearCredentials())
      dispatch(clearConnection())
      navigate(`${basePath}/dashboard`)
      return
    }

    dispatch(clearShowcase())
    dispatch(fetchWallets())
    dispatch(fetchShowcaseBySlug(slug))
    setCurrentSlug(slug)
    setMounted(true)
  }, [dispatch, slug, onboardingStep, isCompleted])

  useEffect(() => {
    trackPageView()
  }, [])

  if (mounted && currentSlug === slug && !showcase) {
    return (
      <motion.div
        variants={page}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container flex flex-col items-center justify-center min-h-screen p-4"
      >
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Showcase Not Found</h2>
          <p className="mb-4">A showcase named "{slug}" could not be found.</p>
          <button
            onClick={() => navigate(`${basePath}/`)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Return to Home
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <>
      {characterUploadEnabled && <CustomUpload />}
      <motion.div
        variants={page}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container flex flex-col items-center p-4"
      >
        <Stepper
          scenario={showcase?.scenarios?.find((scenario: any) => scenario.persona.id === currentPersona?.id)}
          onboardingStep={onboardingStep}
        />
        <AnimatePresence mode="wait">
          {mounted && showcase && (
            <OnboardingContainer
              scenarios={showcase.scenarios}
              currentPersona={currentPersona}
              onboardingStep={onboardingStep}
              connectionId={id}
              connectionState={state}
              invitationUrl={invitationUrl}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
