import type { AxiosResponse } from 'axios'
import { showcaseApi } from './BaseUrl'

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse> => { // TODO add types
  return showcaseApi.get(`/showcases/${slug}`)
}
