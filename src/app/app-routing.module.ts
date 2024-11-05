import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: 'list/:category',
    loadChildren: () =>
      import('./movie/movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule,
      ),
  },
  {
    path: 'list/genre/:id',
    loadChildren: () =>
      import('./movie/movie-list-page/movie-list-page.module').then(
        (m) => m.MovieListPageModule,
      ),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./movie/movie-detail-page/movie-detail-page.module').then(
        (m) => m.MovieDetailPageModule,
      ),
  },
  {
    path: 'search/:query',
    loadChildren: () =>
      import('./movie/movie-search-page/movie-search-page.module').then(
        (m) => m.MovieSearchPageModule,
      ),
  },
  {
    path: 'my-movies',
    loadChildren: () =>
      import('./movie/my-movie-list/my-movie-list.module').then(
        (m) => m.MyMovieListModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'list/popular',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
