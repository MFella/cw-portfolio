import {
    component$,
    Signal,
    useSignal,
    useStyles$,
    $,
    useVisibleTask$,
} from '@builder.io/qwik'
import Toggler from '../mode-toggler/mode-toggler'
import { useSpeakConfig, SpeakLocale } from 'qwik-speak'

const languages = ['pl-PL', 'en-US']
export type Languages = (typeof languages)[number]

export default component$(() => {
    const config = useSpeakConfig()
    const selectedLanguage: Signal<Languages> = useSignal('')

    useStyles$(customStyles)

    const setLocale = $((speakLocale: SpeakLocale) => {
        // Store locale in a cookie
        document.cookie = `locale=${JSON.stringify(
            speakLocale
        )};max-age=86400;path=/`
        selectedLanguage.value = speakLocale.lang
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
            <div class="language-button-container flex items-center gap-3 md:gap-2">
                <div>
                    {config.supportedLocales.map((speakLocale: SpeakLocale) => (
                        <button
                            key={speakLocale.lang}
                            class={
                                buttonClasses +
                                (selectedLanguage.value === speakLocale.lang
                                    ? ' bg-emerald-300 dark:bg-purple-500'
                                    : ' hover:bg-gray-100 dark:bg-slate-500 dark:hover:bg-slate-600 dark:text-gray-100')
                            }
                            onClick$={async () => await setLocale(speakLocale)}
                        >
                            {speakLocale.lang.split('-')[1]}
                        </button>
                    ))}
                </div>
            </div>
            <Toggler />
        </header>
    )
})

export const headerClasses: string =
    'header-container sticky top-0 left-0 z-10 flex h-[48.7px] justify-end overflow-x-auto border-b' +
    ' border-details bg-auto px-2 transition-all md:px-4 bg-white-0 dark:bg-blue-gray-700 bg-white overflow-hidden'
const buttonClasses: string =
    'rounded-md border border-slate-300 dark:border-gray-200 border-details bg-misc font-medium shadow-sm transition-all hover:bg-details text-xs' +
    ' py-1 px-2 mx-1'

const customStyles = `
.header-container {
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display:none;
    }
}
`
