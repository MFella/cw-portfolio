import {
    component$,
    type Signal,
    useSignal,
    useStyles$,
    $,
    useVisibleTask$,
} from '@builder.io/qwik'
import Toggler from '../mode-toggler/mode-toggler'
import { useSpeakConfig, type SpeakLocale } from 'qwik-speak'

const languages = ['pl-PL', 'en-US']
export type Languages = (typeof languages)[number];

export default component$(() => {
    const config = useSpeakConfig()
    const selectedLanguage: Signal<Languages> = useSignal('')

    useStyles$(customStyles)

    const setLocale = $((speakLocale: SpeakLocale) => {
        // Store locale in a cookie
        document.cookie = `locale=${JSON.stringify(
            speakLocale
        )};max-age=86400;path=/`;
        if (languages.includes(speakLocale.lang)) {
            selectedLanguage.value = speakLocale.lang
        }
        location.reload()
    })

    useVisibleTask$(async () => {
        const result = new RegExp(
            '(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)'
        ).exec(document.cookie)

        if (result) {
            selectedLanguage.value = JSON.parse(result[1])['lang']
        } else {
            selectedLanguage.value = config.defaultLocale.lang
        }
    })

    return (
        <header class={headerClasses}>
            <div class="flex items-center gap-2">
                {config.supportedLocales.map((speakLocale: SpeakLocale) => (
                    <button
                        key={speakLocale.lang}
                        class={
                            'chip cursor-pointer uppercase ' +
                            (selectedLanguage.value === speakLocale.lang
                                ? 'is-active'
                                : '')
                        }
                        onClick$={async () => await setLocale(speakLocale)}
                    >
                        {speakLocale.lang.split('-')[1]}
                    </button>
                ))}
            </div>
            <Toggler />
        </header>
    )
})

export const headerClasses: string =
    'header-container sticky top-0 left-0 z-10 flex h-[52px] items-center justify-between overflow-x-auto border-b border-[var(--bp-border)] bg-[var(--bp-panel)] px-4 transition-colors'

const customStyles = `
.header-container {
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display:none;
    }
}
`
