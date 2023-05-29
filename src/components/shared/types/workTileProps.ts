import { TechnologyTypes } from '~/components/shared/types/technologyTypes'
export type WorkTileProps = {
    mainImgSrc: string
    mainImgClasses: Array<string>
    title: string
    startDate: Date
    endDate: Date
    descriptions: Array<string>
    technologies: Array<TechnologyTypes>
    id: string
    actionLinks: Array<ActionLinkProps>
}

type ActionLinkProps = {
    label: string
    iconUrl: string
    anchorUrl: string
    iconName: string
    extraClass?: string
}
