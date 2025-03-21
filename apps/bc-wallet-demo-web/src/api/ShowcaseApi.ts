import type { AxiosResponse } from 'axios'

// @ts-expect-error: This is a workaround to avoid the issue with the showcase-api module
import type { ShowcaseResponse } from '../showcase-api'
import { showcaseApi } from './BaseUrl'

export const getShowcaseBySlug = async (slug: string): Promise<AxiosResponse<ShowcaseResponse>> => {
  return showcaseApi.get(`/showcases/${slug}`)
}
