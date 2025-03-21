import type { AxiosResponse } from 'axios'

import type { Credential } from '../slices/types'
import { demoBackendApi } from './BaseUrl'

export const issueCredential = async (
  connectionId: string,
  cred: Credential,
  credDefId: string
): Promise<AxiosResponse> => {
  return demoBackendApi.post(`/demo/credentials/offerCredential`, {
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
  return demoBackendApi.post(`/demo/deeplink/offerCredential`, {
    connection_id: connectionId,
    cred_def_id: credDefId,
    credential_proposal: {
      '@type': 'issue-credential/1.0/credential-preview',
      attributes: cred.attributes,
    },
  })
}

export const getOrCreateCredDefId = async (credential: Credential) => {
  return demoBackendApi.post(`/demo/credentials/getOrCreateCredDef`, credential)
}

export const getDemoCredentialsByConnectionId = async (connectionId: string) => {
  return demoBackendApi.get(`/demo/credentials/connId/${connectionId}`)
}

export const getCredentialById = (credentialId: string): Promise<AxiosResponse> => {
  return demoBackendApi.get(`/demo/credentials/${credentialId}`)
}

export const deleteCredentialById = (credentialId: string): Promise<AxiosResponse> => {
  return demoBackendApi.delete(`/demo/credentials/${credentialId}`)
}
