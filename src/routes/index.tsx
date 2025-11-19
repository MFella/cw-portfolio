import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import Layout from '~/components/app/layout/layout'

export default component$(() => {
    return (
            <div class={classes}>
                <Layout />
            </div>
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
    'w-full text-font transition-all dark:text-white dark:bg-blue-gray-700'
