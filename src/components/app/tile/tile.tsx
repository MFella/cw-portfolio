import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import type { WorkTileProps } from '~/components/shared/types/workTileProps'
import { useFormatDate, useSpeakLocale, inlineTranslate } from 'qwik-speak'
import * as luxon from 'luxon'

const getDurationTitle = (
    years: number | undefined,
    months: number | undefined,
    isStillInProgress: boolean
): string => {
    let yearPart = years && years > 0 ? years + ' year' : ''
    yearPart += years && years > 1 ? 's' : ''
    let monthPart = months && months > 0 ? months + ' month' : ''
    monthPart += months && months > 1 ? 's' : ''
    return yearPart + ' ' + monthPart + (isStillInProgress ? '-' : '')
}

export default component$((props: WorkTileProps) => {
    const t = inlineTranslate()
    const fd = useFormatDate()

    const elapsedTime = useSignal('')

    const speakLocale = useSpeakLocale()

    const isActivityStillInProgress = (): boolean => {
        const luxonEndDate = luxon.DateTime.fromJSDate(props.endDate)
        return luxonEndDate.hasSame(luxon.DateTime.local(), 'day')
    }

    useVisibleTask$(async () => {
        const startDate = luxon.DateTime.fromJSDate(props.startDate)
        const endDate = luxon.DateTime.fromJSDate(props.endDate)
        const diff = endDate.diff(startDate, ['years', 'months'])
        const { years, months } = diff.toObject()
        const isStillInProgress = endDate.hasSame(luxon.DateTime.local(), 'day')
        elapsedTime.value = getDurationTitle(
            Math.floor(years ?? 0),
            Math.floor(months ?? 0),
            isStillInProgress
        )
    })

    return (
        <li class={tileClasses}>
            <div class="flex w-full flex-col gap-3">
                {props.tag && <span class="tag">{props.tag}</span>}
                <div class="flex items-center gap-2">
                    <img
                        src={props.mainImgSrc}
                        alt="Logo"
                        width="32"
                        height="32"
                        class={
                            'h-8 w-8 shrink-0 rounded-[calc(var(--bp-radius)-4px)] border border-[var(--bp-border)] bg-[var(--bp-panel-2)] p-1 box-content ' +
                            props.mainImgClasses.join(' ')
                        }
                    />
                    <div class="flex flex-col gap-1 pl-2">
                        <p class="font-heading text-sm font-bold text-[var(--bp-ink)]">
                            {t(props.title)}
                        </p>
                        {props.role && (
                            <small class="italic text-[var(--bp-muted)]">
                                {t(props.role)}
                            </small>
                        )}
                    </div>
                </div>
                <ul class="flex flex-col gap-1.5">
                    {props.descriptions?.map((description) => (
                        <li key={description} class="flex items-start gap-2">
                            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--bp-accent)]" />
                            <span class="text-sm text-[var(--bp-ink)]">
                                {t(description)}
                            </span>
                        </li>
                    ))}
                </ul>
                <div class="flex flex-wrap gap-2">
                    {props.technologies.map((technology: string) => (
                        <span
                            key={technology}
                            class="flex items-center justify-center rounded-[calc(var(--bp-radius)-4px)] border border-[var(--bp-border)] bg-[var(--bp-panel-2)] p-1.5"
                        >
                            <img
                                src={'/images/' + technology + '-icon.svg'}
                                alt={
                                    technology[0].toUpperCase() +
                                    technology.slice(1)
                                }
                                title={
                                    technology[0].toUpperCase() +
                                    technology.slice(1)
                                }
                                width="20"
                                height="20"
                            />
                        </span>
                    ))}
                </div>
                {props?.actionLinks.length > 0 && (
                    <div class="flex flex-wrap items-center gap-3">
                        {props.actionLinks.map((link) => (
                            <a
                                key={link.anchorUrl}
                                href={link.anchorUrl}
                                target="_blank"
                                rel="noreferrer"
                                class={'stamp ' + (link.extraClass ?? '')}
                            >
                                <img
                                    src={link.iconUrl}
                                    alt={link.iconName}
                                    width="16"
                                    height="16"
                                    class="h-4 w-4 invert-[var(--img-inverted)]"
                                />
                                {t(link.label)}
                            </a>
                        ))}
                    </div>
                )}
                {elapsedTime.value?.trim() !== '-' && (
                    <span class="mt-1 inline-flex w-fit items-center gap-1 rounded-full border border-[var(--bp-border)] px-2 py-1 font-mono text-xs text-[var(--bp-muted)]">
                        {fd(
                            props.startDate,
                            { dateStyle: 'medium' },
                            speakLocale.lang
                        )}
                        <span class="text-[var(--bp-accent-text)]">
                            &rarr;
                        </span>
                        {isActivityStillInProgress()
                            ? t(
                                  'app.activity-in-progress-suffix',
                                  {},
                                  speakLocale.lang
                              )
                            : fd(
                                  props.endDate,
                                  { dateStyle: 'medium' },
                                  speakLocale.lang
                              )}
                    </span>
                )}
            </div>
        </li>
    )
})

const tileClasses = 'card flex h-full w-full flex-col'
