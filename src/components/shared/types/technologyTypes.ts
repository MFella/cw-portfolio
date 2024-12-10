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
    | 'gitlab'
    | 'typescript'
    | 'gerrit'
    | 'jenkins'
    | 'storybook'
    | 'docker'
    | 'rx-angular'
    | 'rxjs'
    | 'angular-elements'
    | 'prettier'
    | 'socket-io'
    | 'grpc'
    | 'oauth2'
    | 'github-actions'
    | 'aws-ec2'
    | 'vercel'
type TestLibraries = 'jest' | 'karma' | 'jasmine' | 'mocha' | 'cypress'
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
