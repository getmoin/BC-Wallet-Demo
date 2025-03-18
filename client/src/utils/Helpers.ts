import type { AnimatePresenceProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

import { AnimatePresence } from 'framer-motion'

export const isConnected = (state: string) => {
  return state === 'complete' || state === 'response' || state === 'active'
}

export const isDataUrl = (value?: string) => {
  return value && value.startsWith('data:image/')
}

export const isCredIssued = (state: string) => {
  return state === 'credential_issued' || state === 'done' || state === 'credential_acked'
}

export const SafeAnimatePresence = AnimatePresence as React.FC<PropsWithChildren<AnimatePresenceProps>>
