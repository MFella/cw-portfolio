import { component$ } from '@builder.io/qwik'
import { $translate as t } from 'qwik-speak'
import { KnowledgeSection } from '~/components/shared/types/knowledgeSection'
import { WorkTileProps } from '~/components/shared/types/workTileProps'
import Tile from '../tile/tile'

export default component$(() => {
    const workTiles: Array<WorkTileProps> = [
        {
            mainImgSrc: '/images/bigpicture-icon.svg',
            mainImgClasses: [],
            title: 'app.work-bigpicture-title',
            startDate: new Date(2021, 4, 1),
            endDate: new Date(),
            descriptions: ['app.work-bigpicture-description-0'],
            technologies: [
                'angular',
                'typescript',
                'tailwind',
                'jest',
                'cypress',
                'nx',
                'storybook',
                'git',
                'gerrit',
                'jira',
            ],
            id: Number(Math.random()).toString(32),
            actionLinks: [],
        },
    ]

    const educationTiles: Array<Omit<WorkTileProps, 'technologies'>> = [
        {
            mainImgSrc: '/images/wut-icon.svg',
            mainImgClasses: ['rotate-90'],
            title: 'app.education-wut-title',
            startDate: new Date(2018, 9, 0),
            endDate: new Date(2022, 1, 2),
            descriptions: [0, 1, 2, 3].map(
                (item) => 'app.education-wut-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            actionLinks: [],
        },
        {
            mainImgSrc: '/images/wsb-icon.svg',
            mainImgClasses: [],
            title: 'app.education-wsb-title',
            startDate: new Date(2022, 3, 14),
            endDate: new Date(),
            descriptions: [0, 1].map(
                (item) => 'app.education-wsb-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            actionLinks: [],
        },
    ]

    const projectTiles: Array<Omit<WorkTileProps, 'startDate' | 'endDate'>> = [
        {
            mainImgSrc: '/images/ezinfo-icon.png',
            mainImgClasses: [],
            title: 'app.project-ezinfo-title',
            descriptions: [0].map(
                (item) => 'app.project-ezinfo-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: [
                'angular',
                'bootstrap',
                'aws-s3',
                'nestjs',
                'mongodb',
                'docker',
            ],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Ezinfo',
                    iconName: 'Github',
                },
                {
                    label: 'app.live-demo-button-label',
                    iconUrl: '/images/play-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Chatterbox',
                    iconName: 'Live demo  ',
                },
            ],
        },
        {
            mainImgSrc: '/images/chatterbox-icon.png',
            mainImgClasses: [],
            title: 'app.project-chatterbox-title',
            descriptions: [0].map(
                (item) => 'app.project-chatterbox-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: ['angular', 'aws-s3', 'nestjs', 'Postgresql'],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Chatterbox',
                    iconName: 'Github',
                },
                {
                    label: 'app.live-demo-button-label',
                    iconUrl: '/images/play-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Chatterbox',
                    iconName: 'Live demo  ',
                },
            ],
        },
        {
            mainImgSrc: '/images/procast-icon.svg',
            mainImgClasses: [],
            title: 'app.project-procast-title',
            descriptions: [0].map(
                (item) => 'app.project-procast-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: ['angular', 'aws-s3', 'nestjs', 'mongodb'],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Procast',
                    iconName: 'Github',
                },
            ],
        },
    ]

    const knowledgeSections: Array<KnowledgeSection> = [
        {
            title: 'knowledge-subsection-frameworks-title',
            items: ['angular', 'react', 'qwik', 'node', 'nestjs', 'expressjs'],
        },
        {
            title: 'knowledge-subsection-styling-libraries-title',
            items: ['tailwind', 'material-ui', 'bootstrap', 'primeng'],
        },
        {
            title: 'knowledge-subsection-testing-libraries-title',
            items: ['karma', 'jasmine', 'jest', 'cypress'],
        },
        {
            title: 'knowledge-subsection-ci-cd-title',
            items: ['gerrit', 'jira', 'github'],
        },
        {
            title: 'knowledge-subsection-databases-title',
            items: [
                'mongodb',
                'supabase',
                'aws-s3',
                'typeorm',
                'prisma',
                'Postgresql',
            ],
        },
        {
            title: 'knowledge-subsection-environment-tools-title',
            items: ['eslint', 'stylelint', 'prettier', 'nx', 'docker', 'rxjs'],
        },
        {
            title: 'knowledge-subsection-state-management-libraries-title',
            items: ['ngrx', 'rx-angular'],
        },
        {
            title: 'knowledge-subsection-ide-title',
            items: ['vscode', 'webstorm'],
        },
    ]

    return (
        <>
            <div class="md:scroll-m-16 px-4">
                <div>
                    <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
                        <span class="text-sm font-semibold md:text-base">
                            {t('app.experience-title')}
                        </span>
                        <span class="rounded-md border border-details bg-misc p-1 font-squada text-xs font-medium transition-all md:py-1 md:px-4 dark:bg-slate-500">
                            {t('app.practice')}
                        </span>
                    </h2>
                    <ul class="flex flex-wrap gap-6">
                        {workTiles.map((item) => (
                            <Tile
                                key={item.id}
                                mainImgSrc={item.mainImgSrc}
                                mainImgClasses={item.mainImgClasses}
                                title={item.title}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                descriptions={item.descriptions}
                                technologies={item.technologies}
                                id={item.id}
                                actionLinks={item.actionLinks}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div class="md:scroll-m-16 px-4">
                <div>
                    <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
                        <span class="text-sm font-semibold md:text-base">
                            {t('app.education-section-title')}
                        </span>
                    </h2>
                    <ul class="flex flex-wrap gap-6">
                        {educationTiles.map((item) => (
                            <Tile
                                key={item.id}
                                mainImgSrc={item.mainImgSrc}
                                mainImgClasses={item.mainImgClasses}
                                title={item.title}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                descriptions={item.descriptions}
                                technologies={[]}
                                id={item.id}
                                actionLinks={item.actionLinks}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div class="md:scroll-m-16 px-4">
                <div>
                    <h2 class="mb-3 flex items-baseline gap-6 sm:gap-4">
                        <span class="text-sm font-semibold md:text-base">
                            {t('app.project-section-title')}
                        </span>
                    </h2>
                    <ul class="flex flex-wrap gap-6">
                        {projectTiles.map((item) => (
                            <Tile
                                key={item.id}
                                mainImgSrc={item.mainImgSrc}
                                mainImgClasses={item.mainImgClasses}
                                title={item.title}
                                startDate={new Date()}
                                endDate={new Date()}
                                descriptions={item.descriptions}
                                technologies={item.technologies}
                                id={item.id}
                                actionLinks={item.actionLinks}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <div class="md:scroll-m-16 px-4">
                <div>
                    <h2 class="mb-3 text-sm font-semibold md:text-base">
                        {t('app.knowledge-section-title')}
                    </h2>
                    <ul class="flex flex-col gap-6 pl-1">
                        {knowledgeSections.map((section) => (
                            <li key={section.title}>
                                <h3 class="list-disc-custom flex text-sm before:content-[''] before:bg-emerald-500 before:absolute before:w-1 before:h-1 before:mr-1 before:mt-2">
                                    <strong class="pl-3">
                                        {t('app.' + section.title)}
                                    </strong>
                                </h3>
                                <ul class="flex flex-wrap gap-1 pt-2">
                                    {section.items.map((item) => (
                                        <li key={item}>
                                            <span class="flex !min-h-[44px] items-center gap-2 rounded-md border border-details py-1 px-2 text-sm bg-misc shadow-inner drop-shadow-center-2xl transition-all dark:bg-slate-500 dark:border-slate-700">
                                                <span class="rounded-lg bg-misc p-1 transition-all flex justify-center items-center">
                                                    <img
                                                        class="w-6 h-6"
                                                        src={
                                                            '/images/' +
                                                            item +
                                                            '-icon.svg'
                                                        }
                                                        alt=""
                                                    />
                                                </span>
                                                <span>
                                                    {item
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        item
                                                            .slice(1)
                                                            .toLowerCase()}
                                                </span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
})
