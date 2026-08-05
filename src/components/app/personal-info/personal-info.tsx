import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak'
import type { TechnologyTypes } from '~/components/shared/types/technologyTypes'

export default component$(() => {
    const t = inlineTranslate()
    const cvButtonUrl = useSignal<string>('')

    const contactUrlList: Array<{
        url: string
        icon: 'gmail' | 'linkedin' | 'github'
        displayUrl: string
    }> = [
        {
            url: 'mailto:cezary.wrzesinski.dev@gmail.com',
            icon: 'gmail',
            displayUrl: 'cezary.wrzesinski.dev@gmail.com',
        },
        {
            url: 'https://www.linkedin.com/in/czarek-wrzesinski-dev/',
            icon: 'linkedin',
            displayUrl: 'linkedin.com',
        },
        {
            url: 'https://github.com/MFella',
            icon: 'github',
            displayUrl: 'github.com',
        },
    ]

    const cvUrls: { englishUrl: string; polishUrl: string } = {
        polishUrl:
            'https://drive.google.com/file/d/1D-feXEm4Gu0DjygT_4da__oiBTAk_0i3/view?usp=sharing',
        englishUrl:
            'https://drive.google.com/file/d/1CSFvckQ9pUYPzLXieK9KuwYqnwERhN5A/view?usp=sharing',
    }

    const preferences: Array<TechnologyTypes> = [
        'nestjs',
        'node',
        'typescript',
        'angular',
        'material-ui',
        'tailwind',
        'mongodb',
        'git',
    ]

    useVisibleTask$(async () => {
        const result = new RegExp(
            '(?:^|; )' + encodeURIComponent('locale') + '=([^;]*)'
        ).exec(document.cookie)
        if (!result) {
            cvButtonUrl.value = cvUrls.polishUrl

            return
        }

        cvButtonUrl.value =
            JSON.parse(result[1])['lang'] === 'pl-PL'
                ? cvUrls.polishUrl
                : cvUrls.englishUrl
    })

    return (
        <div class="flex flex-col gap-8 px-4 pb-8 pt-8">
            <div class="flex flex-wrap items-end gap-6">
                <div class="h-28 w-28 shrink-0 rounded-[var(--bp-radius)] border border-[var(--bp-border)] p-1.5">
                    <img
                        src="/images/my-photo.jpg"
                        alt="Cezary Wrzesinski"
                        class="h-full w-full rounded-[calc(var(--bp-radius)-6px)] object-cover grayscale-[0.15]"
                    />
                </div>
                <div class="min-w-[260px] flex-1">
                    <h1 class="font-heading text-4xl font-extrabold uppercase leading-[0.98] tracking-wide text-[var(--bp-ink)] sm:text-5xl">
                        Cezary
                        <br />
                        Wrzesinski
                    </h1>
                    <p class="mt-3 flex flex-wrap items-center gap-2 text-sm text-[var(--bp-muted)]">
                        <strong class="font-heading text-[var(--bp-ink)]">
                            {t('app.bio-job-title')}
                        </strong>
                        <span>&middot;</span>
                        <span>{t('app.practice')}</span>
                    </p>
                </div>
            </div>

            <p class="max-w-[62ch] text-sm italic leading-6 text-[var(--bp-muted)]">
                {t('app.bio-description')}
            </p>

            <a
                href={cvButtonUrl.value}
                target="_blank"
                rel="noreferrer nofollow"
                class="stamp w-fit"
            >
                {t('app.cv-button-label')}
            </a>

            <div class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                    <span class="eyebrow">01</span>
                    <h2 class="font-heading text-sm font-bold uppercase tracking-wide text-[var(--bp-ink)] md:text-base">
                        {t('app.bio-preferences')}
                    </h2>
                    <span class="h-px flex-1 bg-[var(--bp-border)]" />
                </div>
                <div class="bento-grid bento-grid--chips">
                    {preferences.map((technologyType) => (
                        <span
                            key={technologyType}
                            class="chip justify-center"
                        >
                            <img
                                src={'/images/' + technologyType + '-icon.svg'}
                                alt={technologyType}
                                width="20"
                                height="20"
                            />
                            {technologyType}
                        </span>
                    ))}
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <span class="eyebrow">{t('app.bio-contact')}</span>
                <div class="flex flex-wrap gap-3">
                    {contactUrlList.map((contactUrl) => (
                        <a
                            key={contactUrl.url}
                            target="_blank"
                            href={contactUrl.url}
                            class="chip"
                        >
                            <img
                                src={
                                    '/images/' + contactUrl.icon + '-icon.svg'
                                }
                                alt=""
                                width="16"
                                height="16"
                                class="h-4 w-4 invert-[var(--img-inverted)]"
                            />
                            {contactUrl.displayUrl}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
})
