import { Component } from '@angular/core';
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
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
  ) {}

  movies$: Observable<TMDBMovieModel[]> = this.activatedRoute.params.pipe(
    switchMap((params) => this.movieService.searchMovies(params['query'])),
  );
}
