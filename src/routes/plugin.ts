import { RequestHandler } from '@builder.io/qwik-city'
import { config } from '~/speak-config'

export const onRequest: RequestHandler = ({ request, locale }) => {
    const cookie = request.headers?.get('cookie')
    const acceptLanguage = request.headers?.get('accept-language')

    let lang: string | null = null
    if (cookie) {
        const result = new RegExp(
            '(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)'
        ).exec(cookie)
        if (result) {
            lang = JSON.parse(result[1])['lang']
        }
    }

    if (!lang) {
        if (acceptLanguage) {
            lang = acceptLanguage.split(';')[0]?.split(',')[0]
        }
    }

    locale(lang || config.defaultLocale.lang)
}
