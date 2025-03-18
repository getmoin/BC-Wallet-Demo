import type { AxiosResponse } from 'axios'

import { demoApi } from './BaseUrl'

export const getLastServerReset = (): Promise<AxiosResponse> => {
  return demoApi.get('/server/last-reset')
}
