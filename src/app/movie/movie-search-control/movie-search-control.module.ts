import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovieModule } from '../movie.module';
import { MovieSearchControlComponent } from './movie-search-control.component';

@NgModule({
  imports: [CommonModule, MovieModule, MovieSearchControlComponent],
  exports: [MovieSearchControlComponent],
})
export class MovieSearchControlModule {}
