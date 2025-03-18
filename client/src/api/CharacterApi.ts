import type { AxiosResponse } from 'axios'

import { demoApi } from './BaseUrl'

export const getCharacters = (): Promise<AxiosResponse> => {
  return demoApi.get('/demo/characters')
}

export const getCharacterById = (characterId: string): Promise<AxiosResponse> => {
  return demoApi.get(`/demo/characters/${characterId}`)
}
