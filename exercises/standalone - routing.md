# Modern Angular - Routing

This exercise again focuses on the new `standalone` components API introduced with angular 14.
This time we will look at how the `standalone` components API affects the router configuration.

## Goal

In this exercise you will learn how to transition from an existing `NgModule` based router setup into a `standalone`
router configuration. In the end you will have transformed the `NotFoundPageComponent` into a 
`standalone` component and use the new `loadComponent` method to directly lazy load it.

On top of that we will use the new `loadChildren` overload to directly point to a routing configuration.

## Standalone Routes: movie.routes.ts

We want to make use of the new `loadChildren` overload that allows us to directly import a 
`Routes` configuration. This will further help us to separate our application into logical pieces.

Two steps have to be done in order to achieve this:
1. introduce `movie/movie.routes.ts` file with movie related router configurations from `app-routing.module.ts`
2. create a new path configuration in `app-routing.module.ts` that points to the new routes file

### 1. introduce movie.routes.ts

As a first step, let's move all movie related router configuration into a new `movie/movie.routes.ts` file.

Export a `export const movieRoutes: Routes = [];` for consumers to import.
It should have the configurations for:
* `list/:category`
* `movie/:id`
* `list/genre/:id`
* `search/:query`
* `my-movies`
* empty path fallback to `list/popular`

Also make sure to adjust the import paths, as the new configuration is in a different folder.

<details>
  <summary>movie.routes.ts</summary>

```ts
import { Routes } from '@angular/router';

import { AuthGuard } from '../core/auth.guard';

export const movieRoutes: Routes = [
  {
    path: 'list/:category',
    loadChildren: () =>
      import('./movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule,
      ),
  },
  {
    path: 'list/genre/:id',
    loadChildren: () =>
      import('./movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule,
      ),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./movie-detail-page/movie-detail-page.module').then(
        (m) => m.MovieDetailPageModule,
      ),
  },
  {
    path: 'search/:query',
    loadChildren: () =>
      import('./movie-search-page/movie-search-page.module').then(
        (m) => m.MovieSearchPageModule,
      ),
  },
  {
    path: 'my-movies',
    loadChildren: () =>
      import('./my-movie-list/my-movie-list.module').then(
        (m) => m.MyMovieListModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
  },
];
```

</details>

### 2. adjust `AppRoutingModule`

Now we can safely remove the movie routes from the `AppRoutingModule` and introduce
the final missing piece. We need to introduce a new empty path configuration
that points to the `movieRoutes` const.

<details>
  <summary>AppRoutingModule using movieRoutes</summary>

```ts
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./movie/movie.routes').then((m) => m.movieRoutes),
  },
  {
    path: '**',
    loadChildren: () => {
      return import('./not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      );
    },
  },
];
```

</details>

Great, serve the application and check if the routes are still working as expected. You should also
notice that a new lazy-loaded bundle was introduced in your building process:

```bash
Lazy Chunk Files                 | Names              |  Raw Size
src_app_movie_movie_routes_ts.js | movie-movie-routes |   3.76 kB | 
```

## Standalone `NotFoundPageComponent`

We want to make use of the new `loadComponent` method that allows us to directly import a
component instead of an `NgModule`.
This will reduce unnecessary boilerplate from our application code.

Two steps have to be done in order to achieve this:
1. Mark `NotFoundPageComponent` as `standalone`, adjust imports accordingly and delete the `NgModule`
2. Replace the existing `loadChildren` with `loadComponent`

### 1. Mark `NotFoundPageComponent` as standalone

Start by marking `NotFoundPageComponent` as `standalone: true` in its `Component Decorator`.
You should also add the `FastSvgComponent` & `RouterLink` as import.

<details>
  <summary>NotFoundPageComponent standalone</summary>

```ts
import { FastSvgComponent } from '@push-based/ngx-fast-svg';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found-page',
  template: `/**/`,
  styles: [/**/],
  imports: [FastSvgComponent, RouterLink],
  standalone: true,
})
export class NotFoundPageComponent {}
```

</details>

You can now delete the `NotFoundPageComponentModule`.

### 2. Adjust router configuration

As a final step we need to replace the existing router configuration to `NotFoundPageComponentModule`
to directly point towards `NotFoundPageComponent`.

Go to `AppRoutingModule` and use the new `loadComponent` API.

<details>
  <summary>adjust router configuration</summary>

```ts
{
  path: '**',
    loadComponent: () =>
    import('./not-found-page/not-found-page.component').then(
      (m) => m.NotFoundPageComponent,
    ),
},
```

</details>

Great, you have successfully configured the router to directly use a `standalone` component
which reduces the boilerplate of your application. Serve the app and see if the `NotFoundPageComponent`
shows up properly on the [/not-found](http://localhost:4200/not-found) route.
