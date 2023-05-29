import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'
import { TechnologyTypes } from '~/components/shared/types/technologyTypes'

type Preference = {
    technologyType: TechnologyTypes
    extraClasses: Array<string>
}

export default component$(() => {
    const cvButtonUrl: { url: string } = { url: '' }

    const contactUrlList: Array<{
        url: string
        icon: 'wp' | 'linkedin' | 'github'
        displayUrl: string
        imageClasses: Array<string>
    }> = [
        {
            url: 'mailto:mfella@wp.pl',
            icon: 'wp',
            displayUrl: 'mfella@wp.pl',
            imageClasses: ['w-5', 'h-5', 'invert', 'dark:invert-0'],
        },
        {
            url: 'https://www.linkedin.com/in/czarek-wrzesinski-67a083191/',
            icon: 'linkedin',
            displayUrl: 'linkedin.com',
            imageClasses: ['w-5', 'h-5', 'dark:invert'],
        },
        {
            url: 'https://github.com/MFella',
            icon: 'github',
            displayUrl: 'github.com',
            imageClasses: ['w-5', 'h-5', 'dark:invert'],
        },
    ]

    const cvUrls: { englishUrl: string; polishUrl: string } = {
        polishUrl: '',
        englishUrl: '',
    }

    const preferences: Array<Preference> = [
        {
            technologyType: 'angular',
            extraClasses: ['bg-emerald-300', 'dark:bg-pink-300'],
        },
        {
            technologyType: 'git',
            extraClasses: ['dark:bg-orange-200', 'bg-stone-300'],
        },
        {
            technologyType: 'nestjs',
            extraClasses: ['bg-emerald-300', 'dark:bg-red-300'],
        },
        {
            technologyType: 'node',
            extraClasses: ['bg-teal-500 dark:bg-lime-200'],
        },
        {
            technologyType: 'typescript',
            extraClasses: ['dark:bg-blue-200', 'bg-yellow-100'],
        },
        {
            technologyType: 'cypress',
            extraClasses: ['dark:bg-slate-300', 'bg-fuchsia-200'],
        },
        {
            technologyType: 'figma',
            extraClasses: ['dark:bg-amber-200 ', 'bg-cyan-200'],
        },
        {
            technologyType: 'tailwind',
            extraClasses: ['dark:bg-sky-200', 'bg-indigo-200'],
        },
    ]

    useVisibleTask$(async () => {
        const result = new RegExp(
            '(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)'
        ).exec(document.cookie)
        if (result) {
            cvButtonUrl.url =
                JSON.parse(result[1])['lang'] === 'pl-PL'
                    ? cvUrls.polishUrl
                    : cvUrls.englishUrl
            return
        }

        cvButtonUrl.url = cvUrls.polishUrl
    })

    return (
        <div class="relative mb-12 flex w-full flex-col gap-4 px-2 md:mb-0 md:w-min md:p-3 md:px-4 h-full">
            <div class="relative mx-auto overflow-hidden w-72 h-72 md:w-[296px] md:h-[296px] pointer-events-none">
                <img
                    loading="lazy"
                    src="/images/my-photo.jpg"
                    class="absolute left-[7px] top-[7px] h-[calc(100%-14px)] w-[calc(100%-14px)] rounded-full grayscale-[0.1] border-4 border-blue-gray-200 dark:border-emerald-400"
                />
            </div>
            <span class="top-[312px] left-0 z-20 flex w-full flex-col bg-auto p-3 text-center transition-all md:absolute md:text-left dark:bg-blue-gray-700 bg-white">
                <span class="text-2xl font-semibold">Cezary Wrzesinski</span>
                <span class="text-lg">{t('app.practice')}</span>
            </span>
            <div class="sticky top-0 left-0 flex flex-col gap-4">
                <span class="z-10 mb-2 hidden h-[48.7px] items-center gap-2 border-b border-details bg-auto p-2 transition-all md:flex sticky top-0 bg-white dark:bg-blue-gray-700">
                    <div class="relative  h-9 w-9 pointer-events-none">
                        <img
                            src="/images/my-photo.jpg"
                            alt="Photo"
                            class="absolute inset-0.5 h-8 w-8 rounded-full border-2 border-blue-gray-200 dark:border-emerald-400"
                        />
                    </div>
                    <span class="flex items-baseline gap-2 text-xs">
                        <span class="text-sm font-semibold">
                            Cezary Wrzesinski
                        </span>
                        <small>{t('app.practice')}</small>
                    </span>
                </span>
                <a
                    href={cvButtonUrl.url}
                    target="_blank"
                    rel="noreferrer nofollow"
                >
                    <button class="rounded-md border border-details bg-misc font-medium shadow-sm transition-all hover:bg-details w-full text-sm py-1 px-4">
                        <strong>{t('app.cv-button-label')}</strong>
                    </button>
                </a>
                <span class="flex flex-wrap justify-center text-center md:justify-start md:text-left">
                    <strong>&#128187;{t('app.bio-job-title')}</strong>
                    <p class="pl-1 mt-3 italic leading-5">
                        {t('app.bio-description')}
                    </p>
                </span>
                <div class="flex flex-col items-center gap-2 bg-auto transition-all md:items-start">
                    <span class="font-semibold">
                        {t('app.bio-preferences')}
                    </span>
                    <div class="flex w-80 flex-wrap justify-center gap-2 md:w-full">
                        {preferences.map((preference) => (
                            <span
                                key={preference.technologyType}
                                class={
                                    preferencesCommonClasses +
                                    ' ' +
                                    preference.extraClasses.join(' ')
                                }
                            >
                                <img
                                    src={
                                        '/images/' +
                                        preference.technologyType +
                                        '-icon.svg'
                                    }
                                    alt={preference.technologyType}
                                    width="49"
                                    height="49"
                                />
                            </span>
                        ))}
                    </div>
                </div>
                <div class="flex flex-col items-center gap-1 md:items-start">
                    <span class="font-semibold">{t('app.bio-contact')}</span>
                    {contactUrlList.map((contactUrl) => (
                        <a
                            key={contactUrl.url}
                            target="_blank"
                            href={contactUrl.url}
                            class="flex select-all items-center gap-2 text-sm pt-2"
                        >
                            <img
                                class={contactUrl.imageClasses.join(' ')}
                                src={'/images/' + contactUrl.icon + '-icon.svg'}
                                alt=""
                            />
                            <span>{contactUrl.displayUrl}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
})

const preferencesCommonClasses =
    'transition-all !border-blue-gray-500 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#FEFEFE] p-1 shadow-inner drop-shadow-center-2xl overflow-hidden'
