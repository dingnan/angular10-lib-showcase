# Angular ibrary and Showcase project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.

## github

https://github.com/dingnan/angular10-lib-showcase

## Code scaffolding

Run `npx ng g module layout` to generate module.  
Run `npx ng g c layout/header --module layout` to generate component.  
You can also use `npx ng generate component|directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project structure and knowledge points

### angular folder structure

https://github.com/mathisGarberg/angular-folder-structure

├── media  
└── src  
│ └──── app  
│ ├── core  
│ ├── data  
│ ├── layout  
│ ├── module  
│ └── shared  
└── styles

https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7

### The ultimate guide to set up your Angular library project

https://medium.com/angular-in-depth/the-ultimate-guide-to-set-up-your-angular-library-project-399d95b63500

## how to package the library?

1. at root level package.json
   `"npm_pack": "ng build ng-simple-alert && cd dist/ng-simple-alert && npm pack",`

2. > npm run npm_pack

3. copy dist/ng-simple-alert/ng-simple-alert-0.0.1.tgz to a folder

## how to consume this library in other application?

1. (in the root of project) > `npm install ../widget/ng-simple-alert-0.0.1.tgz`

2. app.module.ts  
   `import { NgSimpleAlertModule } from "ng-simple-alert"`

## peerDependencies

npm Peer Dependencies  
Understanding when and why to use npm peerDependencies

https://medium.com/angular-in-depth/npm-peer-dependencies-f843f3ac4e7f

library **package.json**  
`"peerDependencies": { "@angular/common": "^10.0.11", "@angular/core": "^10.0.11", "@angular/flex-layout": "^10.0.0-beta.32" }, `

## Mock backend api projectTODO

TODO

## Jest

1. test all spec files

`"npm run test"`

2. test on one spec file

   1. install jest cli: "npm install jest-cli"
   2. "jest app.component.spec.ts"
   3. or change package.json "test": "jest app.component.spec.ts",

3. How to debug Jest tests with VSCode  
   https://www.basefactor.com/using-visual-studio-code-to-debug-jest-based-unit-tests

## Prettier

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

File -> Preferences -> Settings -> Text Editor -> Formatting -> check Format On Save  
check this file for reference .vscode\settings.json
