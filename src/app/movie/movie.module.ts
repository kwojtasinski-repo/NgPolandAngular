import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { SharedModule } from '../shared/shared.module';
import { StarRatingModule } from '../ui/pattern/star-rating/star-rating.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieImagePipe } from './movie-image.pipe';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FastSvgModule,
    RouterModule,
    SharedModule,
    StarRatingModule,
    MovieCardComponent,
    MovieListComponent,
    MovieImagePipe,
  ],
  exports: [MovieListComponent, MovieImagePipe],
})
export class MovieModule {}
