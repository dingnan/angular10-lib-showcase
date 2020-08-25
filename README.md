# Angular10LibShowcase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project structure and knowledge points

# The ultimate guide to set up your Angular library project
https://medium.com/angular-in-depth/the-ultimate-guide-to-set-up-your-angular-library-project-399d95b63500

# how to package the library?
1. at root level package.json
"npm_pack": "ng build ng-simple-alert && cd dist/ng-simple-alert && npm pack",

2. >npm run npm_pack

3. copy dist/ng-simple-alert/ng-simple-alert-0.0.1.tgz to a folder

# how to consume this library in other application?
1. (in the root of project) > np install ../widget/ng-simple-alert-0.0.1.tgz

2. app.module.ts
import { NgSimpleAlertModule } from "@ng-simple-alert"

# peerDependencies
npm Peer Dependencies
Understanding when and why to use npm peerDependencies

https://medium.com/angular-in-depth/npm-peer-dependencies-f843f3ac4e7f

library package.json
"peerDependencies": {
    "@angular/common": "^10.0.11",
    "@angular/core": "^10.0.11",
    "@angular/flex-layout": "^10.0.0-beta.32"
  },

# flex-layout
https://github.com/angular/flex-layout

# add a mock backend api project


# Angular View Encapsulation
https://blog.angular-university.io/angular-host-context/

# Jest
