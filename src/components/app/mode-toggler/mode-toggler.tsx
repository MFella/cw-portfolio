import {
    component$,
    type Signal,
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
        ($event: MouseEvent) => {
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
        <div class="inline-flex items-center justify-center gap-2">
            <svg
                class="h-4 w-4"
                fill="none"
                stroke="var(--bp-muted)"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                ></path>
            </svg>
            <label class="relative inline-flex !cursor-pointer items-center">
                <input
                    type="checkbox"
                    value=""
                    class="peer sr-only"
                    checked={isDarkMode.value}
                    onClick$={($event: MouseEvent) => setMode($event)}
                />
                <div class="peer h-5 w-9 rounded-full border border-[var(--bp-border)] bg-[var(--bp-panel-2)] transition-colors after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-[var(--bp-border)] after:bg-[var(--bp-panel)] after:transition-all after:content-[''] peer-checked:bg-[var(--bp-accent)] peer-checked:after:translate-x-full peer-checked:after:border-[var(--bp-accent)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--bp-accent)]"></div>
            </label>
            <svg
                class="h-4 w-4"
                fill="none"
                stroke="var(--bp-muted)"
                stroke-width="1.5"
                viewBox="0 0 24 24"
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
    )
})
