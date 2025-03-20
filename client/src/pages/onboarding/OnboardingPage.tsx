import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { trackPageView } from '@snowplow/browser-tracker'

import { CustomUpload } from '../../components/CustomUpload'
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
  const { characterUploadEnabled } = usePreferences()
  const [mounted, setMounted] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)

  console.log('Rendering OnboardingPage with showcase:', showcase)

  useEffect(() => {
    console.log('useEffect: showcase changed', showcase)
    if (showcase !== undefined) {
      setMounted(true)
      console.log('Mounted set to true')
    }
  }, [showcase])

  useEffect(() => {
    console.log('useEffect: fetching showcase if needed', {
      onboardingStep,
      isCompleted,
      hasFetched,
    })
    if ((!OnboardingComplete(onboardingStep) && !isCompleted) && !hasFetched) {
      console.log('Dispatching fetchWallets and fetchShowcaseBySlug with slug:', slug)
      dispatch(fetchWallets())
      dispatch(fetchShowcaseBySlug(slug))
        .then((result: any) => {
          if (result.error) {
            console.error('Failed to fetch showcase:', result.error)
          } else {
            console.log('Successfully fetched showcase:', result.payload)
    }
        })
      setHasFetched(true)
    }
  }, [dispatch, slug, onboardingStep, isCompleted, hasFetched])

  useEffect(() => {
    console.log('useEffect: checking onboarding completion', { onboardingStep, isCompleted })
    if (OnboardingComplete(onboardingStep) || isCompleted) {
      console.log('Onboarding complete; navigating to dashboard')
      dispatch(completeOnboarding())
      dispatch(clearCredentials())
      dispatch(clearConnection())
      navigate(`${basePath}/dashboard`)
    }
  }, [dispatch, onboardingStep, isCompleted, navigate])

  useEffect(() => {
    console.log('Tracking page view')
    trackPageView()
  }, [])

  if (showcase === undefined) {
    console.log('Render: showcase undefined, showing loading')
    return <div>Loading...</div>
  }

  if (showcase === null) {
    console.log('Render: showcase null, showing PageNotFound')
    return <PageNotFound resourceType="Showcase" resourceName={slug} />
  }

  const scenario = showcase.scenarios?.find((s: any) => s.persona.id === currentPersona?.id)
  console.log('Render: scenario determined', scenario)

  return (
    <>
      {characterUploadEnabled && <CustomUpload />}

      <div className="container flex flex-col items-center p-4">
        {scenario && <Stepper scenario={scenario} onboardingStep={onboardingStep} />}

        <SafeAnimatePresence mode="wait">
          {mounted && showcase && (
            <OnboardingContainer
              key="onboarding-container"
              scenarios={showcase.scenarios}
              currentPersona={currentPersona}
              onboardingStep={onboardingStep}
              connectionId={id}
              connectionState={state}
              invitationUrl={invitationUrl}
            />
          )}
        </SafeAnimatePresence>
      </div>
    </>
  )
}
