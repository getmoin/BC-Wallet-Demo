import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { trackPageView } from '@snowplow/browser-tracker'
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
import { OnboardingContainer } from './OnboardingContainer'
import { Stepper } from './components/Stepper'
import { useSlug } from '../../utils/SlugUtils'
import { clearShowcase } from '../../slices/showcases/showcasesSlice'
import { PageNotFound } from '../PageNotFound'

export const OnboardingPage: React.FC = () => {
  useTitle('Get Started | BC Wallet Self-Sovereign Identity Demo')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { showcase, currentPersona } = useShowcases()
  const slug = useSlug()
  const { currentStep, isCompleted, scenario } = useOnboarding()
  const { state, invitationUrl, id } = useConnection()
  const { characterUploadEnabled } = usePreferences()
  const [mounted, setMounted] = useState(false)
  const [currentSlug, setCurrentSlug] = useState<string | null>(null)

  useEffect(() => {
    if (isCompleted && showcase) {
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
  }, [dispatch, slug, isCompleted, showcase, navigate])

  useEffect(() => {
    trackPageView()
  }, [])

  if (showcase === undefined) {
    return <div>Loading...</div>
  }

  if (showcase === null) {
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
        {scenario && scenario.steps && (
          <Stepper steps={scenario.steps} currentStep={currentStep} />
        )}
        {showcase && (
            <AnimatePresence mode="wait">
            <OnboardingContainer
              scenarios={showcase.scenarios}
              currentPersona={currentPersona}
                    currentStep={currentStep}
              connectionId={id}
              connectionState={state}
              invitationUrl={invitationUrl}
            />
          </AnimatePresence>
        )}
      </motion.div>
    </>
  )
}
