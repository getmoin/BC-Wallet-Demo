import type { AxiosResponse } from 'axios'
import { demoBackendApi } from './BaseUrl'

export const getCharacters = async (): Promise<AxiosResponse> => {

  const xx = await demoBackendApi.get('/showcases/bestbc-college')

  console.log(`Showcase Response: ${JSON.stringify(xx)}`)

  return xx

}

export const getCharacterById = (characterId: string): Promise<AxiosResponse> => {
  return demoBackendApi.get(`/demo/characters/${characterId}`)
}

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse> => { // TODO add types
  return demoBackendApi.get(`/showcases/${slug}`)
}
