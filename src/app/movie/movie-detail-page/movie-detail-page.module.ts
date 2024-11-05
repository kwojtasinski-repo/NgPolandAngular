import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { DetailGridModule } from '../../ui/component/detail-grid/detail-grid.component';
import { StarRatingModule } from '../../ui/pattern/star-rating/star-rating.component';
import { MovieModule } from '../movie.module';
import { MovieDetailPageComponent } from './movie-detail-page.component';

@NgModule({
  declarations: [MovieDetailPageComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MovieDetailPageComponent,
      },
    ]),
    MovieModule,
    CommonModule,
    FastSvgModule,
    DetailGridModule,
    StarRatingModule,
  ],
})
export class MovieDetailPageModule {}
