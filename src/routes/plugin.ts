import type { RequestHandler } from '@builder.io/qwik-city'
import { resolveLocale } from '~/speak-config'

function getCookieLang(cookie: string | null | undefined): string | null {
    if (!cookie) return null

    const result = new RegExp(
        '(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)'
    ).exec(cookie)
    if (!result) return null

    try {
        return JSON.parse(decodeURIComponent(result[1]))['lang'] ?? null
    } catch {
        return null
    }
}

export const onRequest: RequestHandler = ({ request, locale }) => {
    const cookieLang = getCookieLang(request.headers?.get('cookie'))
    const acceptLanguage = request.headers
        ?.get('accept-language')
        ?.split(';')[0]
        ?.split(',')[0]

    locale(resolveLocale(cookieLang || acceptLanguage))
}
