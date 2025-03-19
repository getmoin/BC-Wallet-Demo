import type { AxiosResponse } from 'axios'

import { apiCall2 } from './BaseUrl'

export const getCharacters = async (): Promise<AxiosResponse> => {
  //return apiCall.get('/demo/characters')
  const xx = await apiCall2.get('/showcases/bestbc-college')

  console.log(`Showcase Response: ${JSON.stringify(xx)}`)

  return xx

}

export const getCharacterById = (characterId: string): Promise<AxiosResponse> => {
  return apiCall2.get(`/demo/characters/${characterId}`)
}

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse> => { // TODO add types
  return apiCall2.get(`/showcases/${slug}`)
}
