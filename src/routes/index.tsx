import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { Speak } from 'qwik-speak'
import Layout from '~/components/app/layout/layout'

export default component$(() => {
    return (
        <Speak runtimeAssets={['app']}>
            <div class={classes}>
                <Layout />
            </div>
        </Speak>
    )
})

export const head: DocumentHead = {
    title: 'Portfolio - Cezary Wrzesinski 🎯',
    meta: [
        {
            name: 'description',
            content: 'Portfolio of web developer Cezary Wrzesinski',
        },
    ],
}

const classes: string =
    'w-full bg-auto text-font transition-all dark:bg-blue-gray-700 dark:text-white'
