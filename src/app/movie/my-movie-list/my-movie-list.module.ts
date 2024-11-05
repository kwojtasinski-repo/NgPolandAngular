import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { MovieSearchControlModule } from '../movie-search-control/movie-search-control.module';
import { MyMovieListComponent } from './my-movie-list.component';

@NgModule({
  declarations: [MyMovieListComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyMovieListComponent,
      },
    ]),
    CommonModule,
    ReactiveFormsModule,
    FastSvgModule,
    MovieSearchControlModule,
  ],
})
export class MyMovieListModule {}
