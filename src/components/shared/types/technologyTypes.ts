export type TechnologyTypes =
    | FrontendFrameworks
    | FrontendUiLibraries
    | BackendFrameworks
    | Tools
    | TestLibraries
    | Databases
    | Design
    | IDE
    | StateManagementLibraries

type FrontendFrameworks = 'angular' | 'react' | 'qwik'
type FrontendUiLibraries = 'bootstrap' | 'tailwind' | 'material-ui' | 'primeng'
type BackendFrameworks = 'nestjs' | 'expressjs' | 'node'
type Tools =
    | 'git'
    | 'eslint'
    | 'stylelint'
    | 'npm'
    | 'webstorm'
    | 'nx'
    | 'jira'
    | 'github'
    | 'typescript'
    | 'gerrit'
    | 'storybook'
    | 'docker'
    | 'rx-angular'
    | 'rxjs'
    | 'prettier'
    | 'socket-io'
type TestLibraries = 'jest' | 'karma' | 'jasmine' | 'cypress'
type Databases =
    | 'mongodb'
    | 'supabase'
    | 'aws-s3'
    | 'typeorm'
    | 'prisma'
    | 'Postgresql'
type Design = 'figma'
type IDE = 'vscode' | 'webstorm'
type StateManagementLibraries = 'ngrx'
