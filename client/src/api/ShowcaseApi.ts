import type { AxiosResponse } from 'axios'

import { showcaseApi } from './BaseUrl'

export const getCharacters = async (): Promise<AxiosResponse> => {
  //return apiCall.get('/demo/characters')
  const xx = await showcaseApi.get('/showcases/bestbc-college')

  console.log(`Showcase Response: ${JSON.stringify(xx)}`)

  return xx

}

export const getCharacterById = (characterId: string): Promise<AxiosResponse> => {
  return showcaseApi.get(`/demo/characters/${characterId}`)
}

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse> => { // TODO add types
  return showcaseApi.get(`/showcases/${slug}`)
}
