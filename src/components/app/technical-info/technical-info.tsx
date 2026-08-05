import { component$ } from '@builder.io/qwik'
import { inlineTranslate } from 'qwik-speak'
import type { KnowledgeSection } from '~/components/shared/types/knowledgeSection'
import type { WorkTileProps } from '~/components/shared/types/workTileProps'
import Tile from '../tile/tile'

export default component$(() => {
    const t = inlineTranslate()
    const workTiles: Array<WorkTileProps> = [
        {
            mainImgSrc: '/images/classified-icon.jfif',
            mainImgClasses: [],
            title: 'app.work-classified-1-title',
            startDate: new Date(2025, 1, 17, 12),
            endDate: new Date(),
            descriptions: [
                'app.work-classified-1-description-0',
                'app.work-classified-1-description-1',
                'app.work-classified-1-description-2',
            ],
            technologies: [
                'typescript',
                'node',
                'rxjs',
                'grpc',
                'jest',
                'react',
                'kotlin',
                'gitlab',
                'git',
                'jenkins',
                'jira',
            ],
            id: Number(Math.random()).toString(32),
            actionLinks: [],
            role: 'app.work-classified-1-role',
        },
        {
            mainImgSrc: '/images/rockwell-icon.svg',
            mainImgClasses: [],
            title: 'app.work-rockwell-title',
            startDate: new Date(2023, 8, 1, 12),
            endDate: new Date(2024, 11, 31, 12),
            descriptions: [
                'app.work-rockwell-description-0',
                'app.work-rockwell-description-1',
            ],
            technologies: [
                'angular',
                'typescript',
                'karma',
                'jasmine',
                'mocha',
                'node',
                'expressjs',
                'grpc',
                'gitlab',
                'git',
                'jenkins',
                'jira',
            ],
            id: Number(Math.random()).toString(32),
            actionLinks: [],
            role: 'app.work-rockwell-role',
        },
        {
            mainImgSrc: '/images/bigpicture-icon.svg',
            mainImgClasses: [],
            title: 'app.work-bigpicture-title',
            startDate: new Date(2021, 4, 1, 12),
            endDate: new Date(2023, 8, 0, 12),
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
            role: 'app.work-bigpicture-role',
        },
    ]

    const educationTiles: Array<Omit<WorkTileProps, 'technologies' | 'role'>> =
        [
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
        ]

    const projectTiles: Array<
        Omit<WorkTileProps, 'startDate' | 'endDate' | 'role'>
    > = [
        {
            mainImgSrc: '/images/cinemate-icon.png',
            mainImgClasses: [],
            title: 'app.project-cinemate-title',
            descriptions: [0, 1].map(
                (item: number) => 'app.project-cinemate-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: [
                'angular',
                'rxjs',
                'material-ui',
                'tailwind',
                'oauth2',
                'nestjs',
                'prisma',
                'supabase',
                'nx',
                'github',
                'github-actions',
                'vercel',
                'aws-ec2',
            ],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/cinemate',
                    iconName: 'Github',
                },
                // {
                //     label: 'app.live-demo-button-label',
                //     iconUrl: '/images/play-icon.svg',
                //     anchorUrl: 'https://cinemate-jet.vercel.app/',
                //     iconName: 'Live demo  ',
                // },
            ],
        },
        {
            mainImgSrc: '/images/generic-auth-icon.jpg',
            mainImgClasses: [],
            title: 'app.project-generic-auth-title',
            descriptions: [0, 1, 2].map(
                (item: number) => 'app.project-generic-auth-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: [
                'angular',
                'rxjs',
                'tailwind',
                'oauth2',
                'angular-elements',
                'npm',
                'github',
                'vercel',
            ],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/generic-auth',
                    iconName: 'Github',
                },
                // {
                //     label: 'app.live-demo-button-label',
                //     iconUrl: '/images/play-icon.svg',
                //     anchorUrl: 'https://generic-auth.vercel.app/',
                //     iconName: 'Live demo  ',
                // },
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
            technologies: [
                'angular',
                'rxjs',
                'ngrx',
                'tensorflow',
                'chartjs',
                'ag-grid',
                'material-ui',
                'aws-s3',
                'sheetjs',
                'web-worker',
                'vercel',
            ],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/Procast',
                    iconName: 'Github',
                },
                {
                    label: 'app.live-demo-button-label',
                    iconUrl: '/images/play-icon.svg',
                    anchorUrl: 'https://procast-ochre.vercel.app/',
                    iconName: 'Live demo  ',
                    extraClass: 'glowing-border',
                },
            ],
        },
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
                'rxjs',
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
                // {
                //     label: 'app.live-demo-button-label',
                //     iconUrl: '/images/play-icon.svg',
                //     anchorUrl: 'https://161.35.67.128/',
                //     iconName: 'Live demo  ',
                // },
            ],
        },
        {
            mainImgSrc: '/images/freedev-icon.svg',
            mainImgClasses: [],
            title: 'app.project-freedev-title',
            descriptions: [0].map(
                (item) => 'app.project-freedev-description-' + item
            ),
            id: Number(Math.random()).toString(32),
            technologies: [
                'angular',
                'rxjs',
                'primeng',
                'aws-s3',
                'nestjs',
                'socket-io',
                'Postgresql',
            ],
            actionLinks: [
                {
                    label: 'app.to-repo-button-label',
                    iconUrl: '/images/github-icon.svg',
                    anchorUrl: 'https://github.com/MFella/FreeDev',
                    iconName: 'Github',
                },
                // {
                //     label: 'app.live-demo-button-label',
                //     iconUrl: '/images/play-icon.svg',
                //     anchorUrl: 'https://github.com/MFella/FreeDev',
                //     iconName: 'Live demo  ',
                // },
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
            title: 'knowledge-subsection-ai-prod-title',
            items: ['gemini', 'claude', 'antigravity'],
        },
        {
            title: 'knowledge-subsection-ci-cd-title',
            items: ['gerrit', 'gitlab', 'jira', 'github'],
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
            items: [
                'eslint',
                'stylelint',
                'prettier',
                'nx',
                'docker',
                'rxjs',
                'grpc',
            ],
        },
        {
            title: 'knowledge-subsection-state-management-libraries-title',
            items: ['ngrx', 'rx-angular'],
        },
        {
            title: 'knowledge-subsection-ide-title',
            items: ['vscode', 'webstorm', 'antigravity', 'zed'],
        },
    ]

    return (
        <>
            <div class="scroll-m-16 px-4">
                <div class="mb-5 flex items-center gap-3">
                    <span class="eyebrow">02</span>
                    <h2 class="font-heading text-sm font-bold uppercase tracking-wide text-[var(--bp-ink)] md:text-base">
                        {t('app.experience-title')}
                    </h2>
                    <span class="h-px flex-1 bg-[var(--bp-border)]" />
                </div>
                <ul class="bento-grid">
                    {workTiles.map((item, i) => (
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
                            role={item.role}
                            tag={`NODE_${String(i + 1).padStart(2, '0')}`}
                        />
                    ))}
                </ul>
            </div>
            <div class="scroll-m-16 px-4">
                <div class="mb-5 flex items-center gap-3">
                    <span class="eyebrow">03</span>
                    <h2 class="font-heading text-sm font-bold uppercase tracking-wide text-[var(--bp-ink)] md:text-base">
                        {t('app.education-section-title')}
                    </h2>
                    <span class="h-px flex-1 bg-[var(--bp-border)]" />
                </div>
                <ul class="bento-grid">
                    {educationTiles.map((item, i) => (
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
                            tag={`EDU_${String(i + 1).padStart(2, '0')}`}
                        />
                    ))}
                </ul>
            </div>
            <div class="scroll-m-16 px-4">
                <div class="mb-5 flex items-center gap-3">
                    <span class="eyebrow">04</span>
                    <h2 class="font-heading text-sm font-bold uppercase tracking-wide text-[var(--bp-ink)] md:text-base">
                        {t('app.project-section-title')}
                    </h2>
                    <span class="h-px flex-1 bg-[var(--bp-border)]" />
                </div>
                <ul class="bento-grid">
                    {projectTiles.map((item, i) => (
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
                            tag={`PROJECT_${String(i + 1).padStart(2, '0')}`}
                        />
                    ))}
                </ul>
            </div>
            <div class="scroll-m-16 px-4">
                <div class="mb-5 flex items-center gap-3">
                    <span class="eyebrow">05</span>
                    <h2 class="font-heading text-sm font-bold uppercase tracking-wide text-[var(--bp-ink)] md:text-base">
                        {t('app.knowledge-section-title')}
                    </h2>
                    <span class="h-px flex-1 bg-[var(--bp-border)]" />
                </div>
                <ul class="flex flex-col gap-4">
                    {knowledgeSections.map((section) => (
                        <li key={section.title} class="card">
                            <h3 class="eyebrow mb-3">
                                {t('app.' + section.title)}
                            </h3>
                            <ul class="flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                    <li key={item}>
                                        <span class="chip">
                                            <img
                                                class="h-5 w-5"
                                                width="20"
                                                height="20"
                                                src={
                                                    '/images/' +
                                                    item +
                                                    '-icon.svg'
                                                }
                                                alt=""
                                            />
                                            {item.charAt(0).toUpperCase() +
                                                item.slice(1).toLowerCase()}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
})
