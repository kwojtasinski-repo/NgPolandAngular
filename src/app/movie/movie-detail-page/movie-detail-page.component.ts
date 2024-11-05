import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startWith, switchMap } from 'rxjs';

import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail-page',
  template: `
    <div class="movie-detail-wrapper">
      <ng-container *ngIf="movie$ | async as movie; else loader">
        <ui-detail-grid>
          <div detailGridMedia>
            <img
              class="aspectRatio-2-3 fit-cover"
              [src]="movie.poster_path | movieImage: 780"
              [alt]="movie.title"
              width="780"
              height="1170"
            />
          </div>
          <div detailGridDescription class="movie-detail">
            <header>
              <h1>{{ movie.title }}</h1>
              <h2>{{ movie.tagline }}</h2>
            </header>
            <section class="movie-detail--basic-infos">
              <ui-star-rating [rating]="movie.vote_average" />
              <div class="movie-detail--languages-runtime-release">
                <strong>
                  {{ movie.spoken_languages[0].english_name }}
                  /
                  {{ movie.runtime }}
                  /
                  {{ movie.release_date | date: 'Y' }}
                </strong>
              </div>
            </section>
            <section>
              <h3>The Genres</h3>
              <div class="movie-detail--genres">
                <a
                  *ngFor="let genre of movie.genres"
                  class="movie-detail--genres-link"
                  [routerLink]="['/genre', genre.id]"
                >
                  <fast-svg name="genre" />
                  {{ genre.name }}
                </a>
              </div>
            </section>
            <section class="synopsis">
              <h3>The Synopsis</h3>
              <p>{{ movie.overview || 'no overview available' }}</p>
            </section>
            <section>
              <h3>The Cast</h3>
              <div class="movie-detail--cast-list">
                <div class="cast-list">
                  <div
                    *ngFor="let actor of (credits$ | async)?.cast"
                    class="movie-detail--cast-actor"
                  >
                    <img
                      loading="lazy"
                      [src]="actor.profile_path | movieImage: 185"
                      [alt]="actor.name"
                      [title]="actor.name"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section class="movie-detail--ad-section-links">
              <div class="section--content">
                <a
                  *ngIf="movie.homepage"
                  class="btn"
                  [href]="movie.homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                  <fast-svg class="btn__icon" name="website" />
                </a>
                <a
                  *ngIf="movie.imdb_id"
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  [href]="'https://www.imdb.com/title/' + movie.imdb_id"
                >
                  IMDB
                  <fast-svg class="btn__icon" name="imdb" />
                </a>
                <!-- back function -->
                <button class="btn primary-button" (click)="back()">
                  <fast-svg
                    class="btn__icon"
                    name="back"
                    size="1em"
                  />&nbsp;Back
                </button>
              </div>
            </section>
          </div>
        </ui-detail-grid>
      </ng-container>
    </div>
    <div>
      <header>
        <h1>Recommended</h1>
        <h2>Movies</h2>
      </header>
      <ng-container *ngIf="recommendations$ | async as movies; else loader">
        <movie-list [movies]="movies!" />
      </ng-container>
    </div>

    <ng-template #loader>
      <div class="loader"></div>
    </ng-template>
  `,
  styleUrls: ['./movie-detail-page.component.scss'],
})
export class MovieDetailPageComponent {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {}

  movie$ = this.route.params.pipe(
    switchMap((params) =>
      this.movieService.getMovieById(params.id).pipe(startWith(null)),
    ),
  );

  credits$ = this.route.params.pipe(
    switchMap((params) =>
      this.movieService.getMovieCredits(params.id).pipe(startWith(null)),
    ),
  );
  recommendations$ = this.route.params.pipe(
    switchMap((params) =>
      this.movieService
        .getMovieRecommendations(params.id)
        .pipe(startWith(null)),
    ),
  );

  back() {
    window.history.back();
  }
}
