import { demoServerBaseUrl } from '../api/BaseUrl'

export function prependApiUrl(path: string) {
  let fullPath = `${demoServerBaseUrl}${path}`

  if (path.startsWith('data:')) {
    // path is a data url treat it as is
    fullPath = path
  }
  return fullPath
}
