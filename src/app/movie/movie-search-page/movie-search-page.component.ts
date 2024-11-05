import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { TMDBMovieModel } from '../../shared/model/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-search-page',
  template: `
    <movie-list *ngIf="movies$ | async as movies; else loader" [movies]="movies" />
    <ng-template #loader>
      <div class="loader"></div>
    </ng-template>
  `,
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
