import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { TMDBMovieModel } from '../../shared/model/movie.model';
import { MovieService } from '../movie.service';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'movie-search-page',
  template: `
    @if (movies$ | async; as movies) {
      <movie-list [movies]="movies" />
    } @else {
      <div class="loader"></div>
    }
    <ng-template #loader>
      <div class="loader"></div>
    </ng-template>
  `,
  standalone: true,
  imports: [MovieListComponent, AsyncPipe],
})
export class MovieSearchPageComponent {
  private movieService = inject(MovieService);
  private activatedRoute = inject(ActivatedRoute);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  movies$: Observable<TMDBMovieModel[]> = this.activatedRoute.params.pipe(
    switchMap((params) => this.movieService.searchMovies(params['query'])),
  );
}
