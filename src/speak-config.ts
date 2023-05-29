import type { SpeakConfig } from 'qwik-speak'

export const config: SpeakConfig = {
    defaultLocale: {
        lang: 'pl-PL',
        currency: 'PLN',
        timeZone: 'Europe/Warsaw',
    },
    supportedLocales: [
        { lang: 'pl-PL', currency: 'PLN', timeZone: 'Europe/Warsaw' },
        { lang: 'en-US', currency: 'USD', timeZone: 'America/Los_Angeles' },
    ],
    runtimeAssets: ['app'],
}
