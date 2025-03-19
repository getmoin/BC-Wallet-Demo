import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/ShowcaseApi'
import {getDateInt} from 'server/src/utils/dateint';

export const fetchAllCharacters = createAsyncThunk('characters/fetchAll', async () => {
  const response = await Api.getCharacters()
  return response.data
})

export const fetchCharacterById = createAsyncThunk('characters/fetchById', async (id: string) => {
  const response = await Api.getCharacterById(id)
  return response.data
})

export const fetchShowcaseBySlug = createAsyncThunk('showcases/fetchById', async (slug: string) => {
  const response = await Api.getShowcaseBySlug(slug)

  const scenarios = response.data.showcase.scenarios.map((scenario: any) => ({
    persona: {
      id: scenario.personas[0].id,
      name: scenario.personas[0].name,
      slug: scenario.personas[0].slug,
      description: scenario.personas[0].description,
      role: scenario.personas[0].role,
      headshotImage: scenario.personas[0].headshotImage.id,
      bodyImage: scenario.personas[0].bodyImage.id,
    },
    steps: scenario.steps.map((step: any) => ({
      title: step.title,
      description: step.description,
      screenId: step.screenId,
      ...(step.asset && { asset: step.asset.id }),
      iconDark: step.iconDark.id,
      iconLight: step.iconLight.id,
    }))
  }))

  return {
    id: response.data.showcase.id,
    name: response.data.showcase.name,
    slug: response.data.showcase.slug,
    description: response.data.showcase.description,
    scenarios: scenarios,
  }
})
