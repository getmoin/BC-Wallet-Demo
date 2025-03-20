import type { AxiosResponse } from 'axios'
import { showcaseApi } from './BaseUrl'
import { ShowcaseResponse } from '../showcase-api'

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse<ShowcaseResponse>> => {
  return showcaseApi.get(`/showcases/${slug}`)
}
