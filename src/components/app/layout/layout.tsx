import { component$ } from '@builder.io/qwik'
import Header from '../header/header'
import PersonalInfo from '../personal-info/personal-info'
import TechnicalInfo from '../technical-info/technical-info'

export default component$(() => {
    return (
        <div class={classes}>
            <div class="relative mb-12 flex w-full flex-col gap-4 px-2 md:mb-0 md:w-min md:p-3 md:px-4">
                <PersonalInfo />
            </div>
            <div class="flex flex-col gap-6 w-full">
                <Header />
                <TechnicalInfo />
            </div>
        </div>
    )
})

const classes =
    'container mx-auto flex w-full max-w-[1280px] flex-col pt-5 md:flex-row md:px-6 md:pt-24 bg-auto pb-5'
