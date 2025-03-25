import type { PropsWithChildren } from 'react'
import React from 'react'

import { AppSidebar } from '@/components/app-sidebar'
import { Footer } from '@/components/footer'
import { SidebarInset } from '@/components/ui/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import i18nConfig from '@/i18n.config'
import { routing } from '@/i18n/routing'
import { QueryProviders } from '@/providers/query-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { Montserrat } from "next/font/google";
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { Locale, PageParams } from '@/types'

import '../globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const locale = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

type Params = PropsWithChildren<{
  params: PageParams
}>

export default async function RootLayout({ children, params }: Params) {
  const { locale } = await params
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <QueryProviders>
            <NextIntlClientProvider messages={messages}>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <main className="flex-1 overflow-auto">{children}</main>
                  <Toaster />
                  <Footer />
                </SidebarInset>
              </SidebarProvider>
            </NextIntlClientProvider>
          </QueryProviders>
        </ThemeProvider>
      </body>
    </html>
  )
}
