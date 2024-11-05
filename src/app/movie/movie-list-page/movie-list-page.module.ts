import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { MovieModule } from '../movie.module';
import { MovieListPageComponent } from './movie-list-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MovieListPageComponent,
      },
    ]),
    MovieModule,
    SharedModule,
    MovieListPageComponent,
  ],
})
export class MovieListPageModule {}
