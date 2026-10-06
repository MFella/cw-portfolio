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

/**
 * Maps any incoming language tag (e.g. 'en', 'en-GB', 'pl') to a supported locale,
 * matching exactly first, then by base language, falling back to the default locale.
 */
export function resolveLocale(lang: string | null | undefined): string {
    if (!lang) return config.defaultLocale.lang

    const normalized = lang.trim().toLowerCase()
    const base = normalized.split('-')[0]
    const match =
        config.supportedLocales.find(
            (l) => l.lang.toLowerCase() === normalized
        ) ??
        config.supportedLocales.find(
            (l) => l.lang.toLowerCase().split('-')[0] === base
        )

    return match?.lang ?? config.defaultLocale.lang
}
