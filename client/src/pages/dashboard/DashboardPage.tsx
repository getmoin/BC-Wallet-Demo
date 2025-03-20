import React, { useEffect } from 'react'
import type { CustomCharacter, CustomUseCase } from '../../slices/types'
import { CustomCharacter, CustomUseCase } from '../../slices/types'

import { trackPageView } from '@snowplow/browser-tracker'
import { motion } from 'framer-motion'
import { track } from 'insights-js'
import { useNavigate } from 'react-router-dom'

import { Modal } from '../../components/Modal'
import { page } from '../../FramerAnimations'
import { useAppDispatch } from '../../hooks/hooks'
import { useTitle } from '../../hooks/useTitle'
import { useCredentials } from '../../slices/credentials/credentialsSelectors'
import { usePreferences } from '../../slices/preferences/preferencesSelectors'
import { setDemoCompleted } from '../../slices/preferences/preferencesSlice'
import { useCurrentPersona } from '../../slices/showcases/showcasesSelectors'
import { basePath } from '../../utils/BasePath'
import { SafeAnimatePresence } from '../../utils/Helpers'
import { Footer } from '../landing/components/Footer'
import { NavBar } from '../landing/components/Navbar'
import { DemoCompletedModal } from './components/DemoCompletedModal'
import { ProfileCard } from './components/ProfileCard'
import { RevocationContainer } from './components/RevocationContainer'
import { UseCaseContainer } from './components/UseCaseContainer'

export const DashboardPage: React.FC = () => {
  useTitle('Dashboard | BC Wallet Self-Sovereign Identity Demo')

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { revokableCredentials } = useCredentials()
  const { completedUseCaseSlugs, demoCompleted, completeCanceled, revocationEnabled, showHiddenUseCases } =
    usePreferences()
  const currentCharacter = {
    ...useCurrentPersona(),
    useCases: [] as CustomUseCase[],
  } as CustomCharacter
  const useCases = currentCharacter?.useCases

  useEffect(() => {
    if (completedUseCaseSlugs.length !== 0 && completedUseCaseSlugs.length === useCases?.length && !completeCanceled) {
      dispatch(setDemoCompleted(true))
    }
  }, [completedUseCaseSlugs])

  useEffect(() => {
    trackPageView()
  }, [])

  const ERROR_TITLE = `Woops...`
  const ERROR_DESCRIPTION = `That's not gone well. Please restart the demo.`
  const routeError = () => {
    navigate(`${basePath}/demo`)
    dispatch({ type: 'demo/RESET' })
  }

  const completeDemo = () => {
    navigate(`${basePath}/`)
    dispatch({ type: 'demo/RESET' })

    if (currentCharacter) {
      track({
        id: 'demo-character-completed',
        parameters: {
          character: currentCharacter.name,
        },
      })
    }
  }

  const cancelCompleteDemo = () => {
    dispatch(setDemoCompleted(false))
  }

  return (
    <motion.div
      className="container flex flex-col h-screen justify-between"
      variants={page}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="mx-8 my-4">
        <NavBar />
      </div>
      {currentCharacter ? (
        <>
          <div className="flex flex-col lg:flex-row mb-auto">
            <div className="w-full lg:w-2/3 order-last lg:order-first">
              <UseCaseContainer completedUseCaseSlugs={completedUseCaseSlugs} currentCharacter={currentCharacter} />
              {revokableCredentials.length > 0 && revocationEnabled && currentCharacter.revocationInfo && (
                <RevocationContainer
                  revocationInfo={currentCharacter.revocationInfo}
                  revocationRecord={revokableCredentials}
                />
              )}
            </div>
            <div className="flex flex-1 flex-col p-2 mx-2 dark:text-white">
              <ProfileCard currentCharacter={currentCharacter} />
            </div>
          </div>
        </>
      ) : (
        <SafeAnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
          <Modal title={ERROR_TITLE} description={ERROR_DESCRIPTION} onOk={routeError} />
        </SafeAnimatePresence>
      )}
      {demoCompleted && <DemoCompletedModal action={completeDemo} cancel={cancelCompleteDemo} />}
      <Footer />
    </motion.div>
  )
}
