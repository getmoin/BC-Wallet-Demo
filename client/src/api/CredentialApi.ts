import type { Credential } from '../slices/types'
import type { AxiosResponse } from 'axios'

import { demoApi } from './BaseUrl'

export const issueCredential = async (
  connectionId: string,
  cred: Credential,
  credDefId: string
): Promise<AxiosResponse> => {
  return demoApi.post(`/demo/credentials/offerCredential`, {
    connection_id: connectionId,
    cred_def_id: credDefId,
    credential_proposal: {
      '@type': 'issue-credential/1.0/credential-preview',
      attributes: cred.attributes,
    },
  })
}

export const issueDeepCredential = async (
  connectionId: string,
  cred: Credential,
  credDefId: string
): Promise<AxiosResponse> => {
  return demoApi.post(`/demo/deeplink/offerCredential`, {
    connection_id: connectionId,
    cred_def_id: credDefId,
    credential_proposal: {
      '@type': 'issue-credential/1.0/credential-preview',
      attributes: cred.attributes,
    },
  })
}

export const getOrCreateCredDefId = async (credential: Credential) => {
  return demoApi.post(`/demo/credentials/getOrCreateCredDef`, credential)
}

export const getDemoCredentialsByConnectionId = async (connectionId: string) => {
  return demoApi.get(`/demo/credentials/connId/${connectionId}`)
}

export const getCredentialById = (credentialId: string): Promise<AxiosResponse> => {
  return demoApi.get(`/demo/credentials/${credentialId}`)
}

export const deleteCredentialById = (credentialId: string): Promise<AxiosResponse> => {
  return demoApi.delete(`/demo/credentials/${credentialId}`)
}
