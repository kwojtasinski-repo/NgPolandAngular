import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MovieModule } from '../movie.module';
import { MovieSearchPageComponent } from './movie-search-page.component';

@NgModule({
  declarations: [MovieSearchPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MovieSearchPageComponent,
      },
    ]),
    MovieModule,
    CommonModule,
  ],
})
export class MovieSearchPageModule {}
