import type { AxiosResponse } from 'axios'

import { demoApi } from './BaseUrl'

export const getUseCasesByCharType = (type: string): Promise<AxiosResponse> => {
  return demoApi.get(`/demo/usecases/character/${type}`, {})
}

export const getUseCaseBySlug = (slug: string): Promise<AxiosResponse> => {
  return demoApi.get(`/demo/usecases/${slug}`)
}
