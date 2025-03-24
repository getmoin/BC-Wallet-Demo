import { BadRequestError, Body, Delete, Get, HttpCode, JsonController, OnUndefined, Param, Post, Put } from 'routing-controllers'
import { Service } from 'typedi'
import CredentialSchemaService from '../services/CredentialSchemaService'
import {
  CredentialSchemaRequest,
  CredentialSchemaRequestToJSONTyped,
  CredentialSchemaResponse,
  CredentialSchemaResponseFromJSONTyped,
  CredentialSchemasResponse,
  CredentialSchemasResponseFromJSONTyped,
  instanceOfCredentialSchemaRequest,
} from 'bc-wallet-openapi'

@JsonController('/credentials/schemas')
@Service()
export class CredentialSchemaController {
  constructor(private credentialSchemaService: CredentialSchemaService) {}

  @Get('/')
  public async getAll(): Promise<CredentialSchemasResponse> {
    try {
      const result = await this.credentialSchemaService.getCredentialSchemas()
      return CredentialSchemasResponseFromJSONTyped({ credentialSchemas: result }, false)
    } catch (e) {
      if (e.httpCode !== 404) {
        console.error('getAll schemas failed:', e)
      }
      return Promise.reject(e)
    }
  }

  @Get('/:id')
  public async getOne(@Param('id') id: string): Promise<CredentialSchemaResponse> {
    try {
      const credentialSchema = await this.credentialSchemaService.getCredentialSchema(id)
      return CredentialSchemaResponseFromJSONTyped({ credentialSchema }, false)
    } catch (e) {
      if (e.httpCode !== 404) {
        console.error(`getOne schema id=${id} failed:`, e)
      }
      return Promise.reject(e)
    }
  }

  @HttpCode(201)
  @Post('/')
  public async post(@Body() credentialSchemaRequest: CredentialSchemaRequest): Promise<CredentialSchemaResponse> {
    try {
      if (!instanceOfCredentialSchemaRequest(credentialSchemaRequest)) {
        return Promise.reject(new BadRequestError())
      }
      const credentialSchema = await this.credentialSchemaService.createCredentialSchema(CredentialSchemaRequestToJSONTyped(credentialSchemaRequest))
      return CredentialSchemaResponseFromJSONTyped({ credentialSchema }, false)
    } catch (e) {
      if (e.httpCode !== 404) {
        console.error('credentialSchemaRequest post failed:', e)
      }
      return Promise.reject(e)
    }
  }

  @Put('/:id')
  public async put(@Param('id') id: string, @Body() credentialSchemaRequest: CredentialSchemaRequest): Promise<CredentialSchemaResponse> {
    try {
      if (!instanceOfCredentialSchemaRequest(credentialSchemaRequest)) {
        return Promise.reject(new BadRequestError())
      }
      const credentialSchema = await this.credentialSchemaService.updateCredentialSchema(
        id,
        CredentialSchemaRequestToJSONTyped(credentialSchemaRequest),
      )
      return CredentialSchemaResponseFromJSONTyped({ credentialSchema }, false)
    } catch (e) {
      if (e.httpCode !== 404) {
        console.error(`put schema id=${id} failed:`, e)
      }
      return Promise.reject(e)
    }
  }

  @OnUndefined(204)
  @Delete('/:id')
  public async delete(@Param('id') id: string): Promise<void> {
    try {
      return this.credentialSchemaService.deleteCredentialSchema(id)
    } catch (e) {
      if (e.httpCode !== 404) {
        console.error(`delete schema id=${id} failed:`, e)
      }
      return Promise.reject(e)
    }
  }
}
