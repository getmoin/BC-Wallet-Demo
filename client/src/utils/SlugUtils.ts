import { useParams } from 'react-router-dom'

export function useSlugOrDefault(paramName = 'slug'): string {
  const params = useParams()
  const inputSlug = params[paramName]
  const defaultValue = process.env.REACT_APP_DEFAULT_SLUG

  if (!inputSlug && !defaultValue) {
    throw Error("No slug provided and REACT_APP_DEFAULT_SLUG not configured")
  }

  return inputSlug ?? defaultValue as string
}