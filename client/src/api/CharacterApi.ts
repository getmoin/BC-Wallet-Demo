import type { AxiosResponse } from 'axios'

import { demoBackendApi } from './BaseUrl'

export const getCharacters = (): Promise<AxiosResponse> => {
  return demoBackendApi.get('/demo/characters')
}

export const getCharacterById = (characterId: string): Promise<AxiosResponse> => {
  return demoBackendApi.get(`/demo/characters/${characterId}`)
}
