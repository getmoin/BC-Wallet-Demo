import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
  maxAge: 30 * 24 * 60 * 60 * 1000, // keep 30 days
  exclude: { query: true },
})

export const demoBackendBaseRoute = process.env.REACT_APP_BASE_ROUTE ?? '/digital-trust/showcase'
export const demoBackendBaseWsUrl = process.env.REACT_APP_HOST_BACKEND ?? 'http://127.0.0.1:5000'
export const demoBackendBaseUrl = demoBackendBaseWsUrl + demoBackendBaseRoute
export const demoBackendSocketPath = `${demoBackendBaseRoute}/demo/socket/`
export const demoBackendApi = axios.create({
  baseURL: demoBackendBaseUrl,
  adapter: cache.adapter,
})

export const showcaseServerBaseUrl = process.env.REACT_APP_SHOWCASE_BACKEND ?? 'http://127.0.0.1:5005'
export const showcaseApi = axios.create({
  baseURL: showcaseServerBaseUrl,
  adapter: cache.adapter,
})
