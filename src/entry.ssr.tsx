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
    type RenderOptions,
    renderToStream,
    type RenderToStreamOptions,
} from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'
import { isDev } from '@builder.io/qwik/build'
import Root from './root'
import { resolveLocale } from './speak-config'

export function extractBase({ serverData }: RenderOptions): string {
    if (!isDev && serverData?.locale) {
        return '/build/' + resolveLocale(serverData.locale)
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
            lang: resolveLocale(opts.serverData?.locale),
            ...opts.containerAttributes,
        },
        base: extractBase,
    })
}
