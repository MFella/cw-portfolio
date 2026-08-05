import { component$ } from '@builder.io/qwik'
import Header from '../header/header'
import PersonalInfo from '../personal-info/personal-info'
import TechnicalInfo from '../technical-info/technical-info'

export default component$(() => {
    return (
        <div class="sheet container mx-auto max-w-[1280px]">
            <span class="tick tl" />
            <span class="tick tr" />
            <span class="tick bl" />
            <span class="tick br" />
            <Header />
            <div class="flex flex-col gap-10 py-8">
                <PersonalInfo />
                <TechnicalInfo />
            </div>
            <div class="titleblock px-4">
                <span>
                    DWG NO. <b>CW-001</b>
                </span>
                <span>
                    REV <b>2026.08</b>
                </span>
                <span>
                    SCALE <b>NTS</b>
                </span>
                <span>
                    DRAWN <b>C. WRZESINSKI</b>
                </span>
            </div>
        </div>
    )
})
