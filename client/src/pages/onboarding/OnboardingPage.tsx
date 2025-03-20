import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { trackPageView } from '@snowplow/browser-tracker'
import { motion } from 'framer-motion'

import { CustomUpload } from '../../components/CustomUpload'
import { page } from '../../FramerAnimations'
import { useAppDispatch } from '../../hooks/hooks'
import { useTitle } from '../../hooks/useTitle'
import { useConnection } from '../../slices/connection/connectionSelectors'
import { clearConnection } from '../../slices/connection/connectionSlice'
import { clearCredentials } from '../../slices/credentials/credentialsSlice'
import { useOnboarding } from '../../slices/onboarding/onboardingSelectors'
import { completeOnboarding } from '../../slices/onboarding/onboardingSlice'
import { usePreferences } from '../../slices/preferences/preferencesSelectors'
import { useShowcases } from '../../slices/showcases/showcasesSelectors'
import { clearShowcase } from '../../slices/showcases/showcasesSlice'
import { fetchShowcaseBySlug } from '../../slices/showcases/showcasesThunks'
import { fetchWallets } from '../../slices/wallets/walletsThunks'
import { basePath } from '../../utils/BasePath'
import { SafeAnimatePresence } from '../../utils/Helpers'
import { OnboardingComplete } from '../../utils/OnboardingUtils'
import { useSlug } from '../../utils/SlugUtils'
import { PageNotFound } from '../PageNotFound'
import { Stepper } from './components/Stepper'
import { OnboardingContainer } from './OnboardingContainer'

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
    } else {
      dispatch(clearShowcase())
      dispatch(fetchWallets())
      dispatch(fetchShowcaseBySlug(slug))
      setCurrentSlug(slug)
      setMounted(true)
    }
  }, [dispatch, slug, onboardingStep, isCompleted])

  useEffect(() => {
    trackPageView()
  }, [])

  if (mounted && currentSlug === slug && !showcase) {
    return <PageNotFound resourceType="Showcase" resourceName={slug} />
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
        {showcase && (
          <>
            <Stepper
              scenario={showcase.scenarios?.find((scenario: any) => scenario.persona.id === currentPersona?.id)}
              onboardingStep={onboardingStep}
            />
            <SafeAnimatePresence mode="wait">
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
            </SafeAnimatePresence>
          </>
        )}
      </motion.div>
    </>
  )
}
