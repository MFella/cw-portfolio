import {
    component$,
    type Signal,
    useSignal,
    useStyles$,
    $,
    useVisibleTask$,
} from '@builder.io/qwik'
import Toggler from '../mode-toggler/mode-toggler'
import { useSpeakConfig, type SpeakLocale, inlineTranslate } from 'qwik-speak'

const languages = ['pl-PL', 'en-US']
export type Languages = (typeof languages)[number];

const cvUrls: { englishUrl: string; polishUrl: string } = {
    polishUrl:
        'https://drive.google.com/file/d/1D-feXEm4Gu0DjygT_4da__oiBTAk_0i3/view?usp=sharing',
    englishUrl:
        'https://drive.google.com/file/d/1CSFvckQ9pUYPzLXieK9KuwYqnwERhN5A/view?usp=sharing',
}

export default component$(() => {
    const t = inlineTranslate()
    const config = useSpeakConfig()
    const selectedLanguage: Signal<Languages> = useSignal('')
    const cvButtonUrl = useSignal<string>('')

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

        if (!result) {
            selectedLanguage.value = config.defaultLocale.lang
            cvButtonUrl.value = cvUrls.polishUrl

            return
        }

        const lang = JSON.parse(result[1])['lang']
        selectedLanguage.value = lang
        cvButtonUrl.value =
            lang === 'pl-PL' ? cvUrls.polishUrl : cvUrls.englishUrl
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
            <div class="flex items-center gap-4">
                <a
                    href={cvButtonUrl.value}
                    target="_blank"
                    rel="noreferrer nofollow"
                    class="stamp !py-2"
                >
                    {t('app.cv-button-label')}
                </a>
                <Toggler />
            </div>
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
