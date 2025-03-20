import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { showcaseServerBaseUrl } from '../../../api/BaseUrl'
import { characterFade, fadeExit } from '../../../FramerAnimations'
import type { Persona } from '../../../slices/types'
import { SafeAnimatePresence } from '../../../utils/Helpers'

export interface Props {
  persona?: Persona
}

export const PersonaContent: React.FC<Props> = ({ persona }) => {
  return (
    <motion.div variants={fadeExit} initial="hidden" animate="show" exit="exit" className="h-full">
      {persona ? (
        <SafeAnimatePresence mode="wait">
          <motion.div
            key={persona.role}
            variants={characterFade}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col h-full justify-around"
          >
            <div className="p-2 bg-bcgov-blue dark:bg-bcgov-gold text-white rounded-l-lg flex px-4 self-end">
              <p>{persona.role}</p>
            </div>
            {persona.bodyImage && (
              <img
                className="h-72"
                src={`${showcaseServerBaseUrl}/assets/${persona.bodyImage}/file`}
                alt={persona.name}
              />
            )}
          </motion.div>
        </SafeAnimatePresence>
      ) : (
        <p className="flex h-full items-center justify-center text-grey">SELECT YOUR PERSONA</p>
      )}
    </motion.div>
  )
}
