import {
    component$,
    QwikMouseEvent,
    Signal,
    useSignal,
    useTask$,
    useVisibleTask$,
    $,
} from '@builder.io/qwik'

type Mode = 'default' | 'dark'

const applyDarkMode = (isDarkMode: boolean) => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export default component$(() => {
    const isDarkMode: Signal<boolean> = useSignal(false)

    const setMode = $(
        ($event: QwikMouseEvent<HTMLInputElement, MouseEvent>) => {
            const mode: Mode = ($event.target as HTMLInputElement)?.checked
                ? 'dark'
                : 'default'
            localStorage.setItem('mode', mode)

            isDarkMode.value = mode === 'dark'
            applyDarkMode(mode === 'dark')
        }
    )

    useVisibleTask$(async () => {
        isDarkMode.value = localStorage.getItem('mode') === 'dark'
        applyDarkMode(isDarkMode.value)
    })

    useTask$(async ({ track }) => {
        track(() => isDarkMode.value)
    })

    return (
        <div class="inline-flex justify-center ml-6">
            <div class="w-6 pt-3">
                <svg
                    fill="none"
                    stroke={isDarkMode.value ? 'white' : 'black'}
                    stroke-width="1.5"
                    viewBox="0 0 24 48"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    ></path>
                </svg>
            </div>
            <label class="relative inline-flex items-center cursor-pointer mx-2">
                <input
                    type="checkbox"
                    value=""
                    class="sr-only peer"
                    checked={isDarkMode.value}
                    onClick$={(
                        $event: QwikMouseEvent<HTMLInputElement, MouseEvent>
                    ) => setMode($event)}
                />
                <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[15px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <div class="w-6 pt-3">
                <svg
                    fill="none"
                    stroke={isDarkMode.value ? 'white' : 'black'}
                    stroke-width="1.5"
                    viewBox="0 0 24 48"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    ></path>
                </svg>
            </div>
        </div>
    )
})
