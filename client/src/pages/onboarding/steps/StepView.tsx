import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { fadeX } from '../../../FramerAnimations'
import { StepInformation } from '../components/StepInformation'
import { SetupConnectionAction } from './actions/SetupConnectionAction';
import { ActionType } from '../../../slices/types';
import type { StepAction, TextWithImage } from '../../../slices/types'

export interface Props {
  title: string
  text: string
  textWithImage?: TextWithImage[]
  actions?: StepAction[]
  nextStep?: () => Promise<void>
  invitationUrl?: string
  connectionState?: string
  connectionId?: string
  issuerName?: string
}

export const StepView: React.FC<Props> = (props: Props): ReactElement => {
  const {
    title,
    text,
    textWithImage,
    actions = [],
    nextStep,
    invitationUrl,
    connectionState,
    connectionId,
    issuerName
  } = props

  const getActionElements = () => {
    return actions.map((action, index) => {
      switch (action.actionType) {
        case ActionType.CONNECT: {
          return <SetupConnectionAction
              key={index}
              connectionId={connectionId}
              nextStep={nextStep}
              invitationUrl={invitationUrl}
              issuerName={issuerName ?? 'Unknown'}
              newConnection
              disableSkipConnection={false}
              connectionState={connectionState}
              //backgroundImage={} // FIXME we need to support a background image
          />
        }
        default:
          return <div/>
      }
    })
  }

  return (
    <motion.div className="h-full" variants={fadeX} initial="hidden" animate="show" exit="exit">
      <StepInformation title={title} text={text} textWithImage={textWithImage} />
      {getActionElements()}
    </motion.div>
  )
}
