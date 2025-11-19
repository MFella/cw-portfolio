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
            <div class="flex flex-col justify-between gap-3 w-full">
                <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center justify-center">
                        <img
                            src={props.mainImgSrc}
                            alt="Company logo"
                            class={
                                'w-8 h-8 box-content p-1 border-2 rounded-lg dark:bg-slate-400 transition-all border-gray-300 ' +
                                props.mainImgClasses.join(' ')
                            }
                        />
                        <div class="flex flex-col gap-1 pl-2">
                            <p class="flex gap-4 align-baseline font-squada text-sm font-bold">
                                {t(props.title)}
                            </p>
                            {props.role && (
                                <small class="italic">{t(props.role)}</small>
                            )}
                        </div>
                    </div>
                </div>
                <ul class="description-list flex flex-col gap-1 pl-1">
                    {props.descriptions?.map((description) => (
                        <li
                            key={description}
                            class="flex text-sm before:content-[''] before:bg-emerald-500 before:absolute before:w-1 before:h-1 before:mr-1 before:mt-2"
                        >
                            <h3 class="pl-3">{t(description)}</h3>
                        </li>
                    ))}
                </ul>
                <div class="flex flex-wrap gap-4 justify-center">
                    {props.technologies.map((technology: string) => (
                        <span
                            key={technology}
                            class="rounded-md p-1 transition-all flex justify-center items-center dark:bg-white"
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
                                width="24"
                                height="24"
                            />
                        </span>
                    ))}
                </div>
                <div class="flex items-center justify-around gap-x-6">
                    {props?.actionLinks.map((link) => (
                        <a
                            key={link.anchorUrl}
                            href={link.anchorUrl}
                            target="_blank"
                            class={"flex opacity-90 hover:opacity-100 items-center rounded-md bg-gradient-to-r bg-emerald-300 hover:bg-emerald-400 dark:bg-purple-500 dark:hover:bg-purple-600 text-gray-700 dark:text-white px-3 py-2 text-sm font-semibold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 " + link.extraClass }
                        >
                            <img
                                src={link.iconUrl}
                                alt={link.iconName}
                                class="w-5 h-5 dark:invert"
                            />
                            <span class="pl-2">{t(link.label)}</span>
                        </a>
                    ))}
                </div>
                {elapsedTime.value?.trim() !== '-' && (
                    <span class="flex items-center justify-center rounded-full border border-details px-2 py-1 text-xs border-gray-300">
                        <strong>
                            {fd(
                                props.startDate,
                                {
                                    dateStyle: 'medium',
                                },
                                speakLocale.lang
                            )}
                        </strong>
                        <b class="px-1"> &rarr;</b>
                        <strong>
                            {isActivityStillInProgress()
                                ? t(
                                      'app.activity-in-progress-suffix',
                                      {},
                                      speakLocale.lang
                                  )
                                : fd(
                                      props.endDate,
                                      {
                                          dateStyle: 'medium',
                                      },
                                      speakLocale.lang
                                  )}
                        </strong>
                        <strong></strong>
                    </span>
                )}
            </div>
        </li>
    )
})

const tileClasses =
    'flex w-full gap-12 rounded-md border border-details bg-misc p-4 shadow-sm transition-all lg:w-[calc(50%-12px)] border-gray-300 dark:border-transparent'
