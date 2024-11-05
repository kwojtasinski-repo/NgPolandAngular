import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieModule } from '../movie.module';
import { MovieSearchPageComponent } from './movie-search-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MovieSearchPageComponent,
      },
    ]),
    MovieModule,
    CommonModule,
    MovieSearchPageComponent,
  ],
})
export class MovieSearchPageModule {}
