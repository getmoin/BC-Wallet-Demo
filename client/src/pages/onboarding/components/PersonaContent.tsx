import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { characterFade, fadeExit } from '../../../FramerAnimations'
import { showcaseServerBaseUrl } from '../../../api/BaseUrl'
import { Persona } from '../../../slices/types'

export interface Props {
  persona?: Persona
}

export const PersonaContent: React.FC<Props> = ({ persona }) => {
  return (
    <motion.div variants={fadeExit} initial="hidden" animate="show" exit="exit" className="h-full">
      {persona ? (
        <AnimatePresence mode="wait">
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
            <img className="h-72" src={`${showcaseServerBaseUrl}/assets/${persona.bodyImage}/file`} alt={persona.name} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <p className="flex h-full items-center justify-center text-grey">SELECT YOUR PERSONA</p>
      )}
    </motion.div>
  )
}
