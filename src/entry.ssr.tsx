/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import {
    RenderOptions,
    renderToStream,
    type RenderToStreamOptions,
} from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import { isDev } from '@builder.io/qwik/build'
import Root from './root'
import { config } from './speak-config'

function getAppropriateLocale(incomingLocale: string): 'pl-PL' | 'en-US' {
    switch (incomingLocale) {
        case 'pl':
            return 'pl-PL'
        case 'en-GB':
            return 'en-US'
        default:
            return 'pl-PL'
    }
}

export function extractBase({ serverData }: RenderOptions): string {
    if (!isDev && serverData?.locale) {
        return '/build/' + getAppropriateLocale(serverData.locale)
    } else {
        return '/build'
    }
}

export default function (opts: RenderToStreamOptions) {
    return renderToStream(<Root />, {
        manifest,
        ...opts,
        // Use container attributes to set attributes on the html tag.
        containerAttributes: {
            lang: opts.serverData?.locale || config.defaultLocale.lang,
            ...opts.containerAttributes,
        },
        base: extractBase,
    })
}
