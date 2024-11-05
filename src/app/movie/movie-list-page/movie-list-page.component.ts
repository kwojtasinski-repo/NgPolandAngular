import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { exhaustMap, Observable, scan, startWith, Subject } from 'rxjs';

import { TMDBMovieModel } from '../../shared/model/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-list-page',
  template: `
    <movie-list [movies]="movies" />
    <div (elementVisible)="paginate$.next()"></div>
  `,
})
export class MovieListPageComponent {
  private movieService = inject(MovieService);
  private activatedRoute = inject(ActivatedRoute);

  paginate$ = new Subject<void>();

  movies: TMDBMovieModel[] = [];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (params.category) {
        this.paginate((page) =>
          this.movieService.getMovieList(params.category, page),
        ).subscribe((movies) => {
          this.movies = movies;
        });
      } else {
        this.paginate((page) =>
          this.movieService.getMoviesByGenre(params.id, page),
        ).subscribe((movies) => {
          this.movies = movies;
        });
      }
    });
  }

  private paginate(paginateFn: (page: number) => Observable<TMDBMovieModel[]>) {
    return this.paginate$.pipe(
      startWith(void 0),
      exhaustMap((_, i) => {
        return paginateFn(i + 1);
      }),
      scan((allMovies, pagedMovies) => {
        return [...allMovies, ...pagedMovies];
      }, [] as TMDBMovieModel[]),
    );
  }
}
