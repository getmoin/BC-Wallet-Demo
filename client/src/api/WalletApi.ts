import type { AxiosResponse } from 'axios'

import { demoApi } from './BaseUrl'

export const getWallets = (): Promise<AxiosResponse> => {
  return demoApi.get('/demo/wallets')
}
