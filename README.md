# NgvenezuelaOrg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

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

## Docker

ref:
    - <https://mherman.org/blog/dockerizing-an-angular-app/>
    - <https://nodejs.org/de/docs/guides/nodejs-docker-webapp/>

### commants

Build and tag the Docker image:

`docker build -t ngvenezuela_org:dev .`

Spin up the container once the build is done:

`docker run -d -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm ngvenezuela_org:dev`

clean cache

`docker system prune -a`

TODO: warning ../package.json: No license field

Ref: <https://stackoverflow.com/a/51338183/2513972>
