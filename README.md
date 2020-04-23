# Angular-MVC

MVC example for Angular with redux [NGXS](https://www.ngxs.io/)

[Top level component](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Fcontainers%2Fgrid-data%2Fgrid-data.component.ts) connect underlying [view component](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Fcomponents%2Fgrid-view%2Fgrid-view.component.ts) with [model](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Fservices%2Fmodel.service.ts) and  [controller](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Fservices%2Fcontroller.service.ts).

Redux things implemented in ['state'](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Fstate%2Ftable.state.ts) folder.

All parts combined into [TableModule](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Ftable.module%2Ftable.module.ts) and included into [main module](https://stackblitz.com/edit/ng-mvc?file=src%2Fapp%2Fapp.module.ts).

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-mvc)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
