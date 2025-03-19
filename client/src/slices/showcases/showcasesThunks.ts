import { createAsyncThunk } from '@reduxjs/toolkit'

import * as Api from '../../api/ShowcaseApi'
import {getDateInt} from 'server/src/utils/dateint';

export const fetchAllCharacters = createAsyncThunk('characters/fetchAll', async () => {
  console.log('HELLO: fetchAllCharacters')
  const response = await Api.getCharacters()
  return response.data
})

export const fetchCharacterById = createAsyncThunk('characters/fetchById', async (id: string) => {
  const response = await Api.getCharacterById(id)
  return response.data
})

export const fetchShowcaseBySlug = createAsyncThunk('showcases/fetchById', async (slug: string) => {
  console.log('fetchShowcaseById: FETCH SHOWCASE BY SLUG')
  const response = await Api.getShowcaseBySlug(slug)

  console.log(`Showcase Response: ${JSON.stringify(response.data.showcase)}`)

  return {
    id: response.data.showcase.id,
    name: response.data.showcase.name,
    slug: response.data.showcase.slug,
    description: response.data.showcase.description,
    personas: response.data.showcase.personas.map((persona: any) => ({
      id: persona.id,
      name: persona.name,
      slug: persona.slug,
      description: persona.description,
      role: persona.role,
      headshotImage: persona.headshotImage.id,
      bodyImage: persona.bodyImage.id,
      onboarding: [
        {
          screenId: 'PICK_CHARACTER',
          title: 'Meet Alice',
          text: "Meet Alice (that's you in this demo!). Alice is a student at BestBC College. To help make student life easier, BestBC College is going to offer Alice a digital Student Card to put in her BC Wallet.",
        },
        {
          screenId: 'SETUP_START',
          title: "Let's get started!",
          text: 'BC Wallet is a new app for storing and using credentials on your smartphone. Credentials are things like IDs, licenses and diplomas. \nUsing your BC Wallet is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use two credentials to prove who you are and access court materials online instead of in-person.',
          image: '/public/common/getStarted.svg',
        },
        {
          screenId: 'CHOOSE_WALLET',
          title: 'Install BC Wallet',
          text: 'First, install the BC Wallet app onto your smartphone. Select the button below for instructions and the next step.',
          image: '/public/common/app-store-screenshots.png',
        },
        {
          screenId: 'CONNECT',
          title: 'Connect with BestBC College',
          text: 'Imagine, as Alice, you are logged into the BestBC College website (see below). They want to offer you a Digital Student Card. Use your BC Wallet to scan the QR code from the website.',
          image: '/public/student/onboarding-connect-light.svg',
          issuer_name: 'BestBC College',
        },
        {
          screenId: 'ACCEPT_CREDENTIAL',
          title: 'Accept your student card',
          text: "Your wallet now has a secure and private connection with BestBC College. You should have received an offer in BC Wallet for a Student Card.\nReview what they are sending, and choose 'Accept offer'.",
          image: '/public/common/onboarding-credential-light.svg',
          credentials: [
            {
              name: 'student_card',
              version: process.env.STUDENT_VERSION ?? '1.0',
              icon: '/public/student/icon-student.svg',
              attributes: [
                {
                  name: 'student_first_name',
                  value: 'Alice',
                },
                {
                  name: 'student_last_name',
                  value: 'Smith',
                },
                {
                  name: 'expiry_date',
                  value: 'some_date'//`${getDateInt(4)}`,
                },
              ],
            },
          ],
        },
        {
          screenId: 'SETUP_COMPLETED',
          title: "You're all set!",
          text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
          image: '/public/common/onboarding-completed-light.svg',
        },
      ]
    }))
  }
})
