import { AsyncPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FastSvgComponent } from '@push-based/ngx-fast-svg';

import { AuthService } from '../core/auth.service';
import { MovieService } from '../movie/movie.service';
import { TrackingService } from '../shared/tracking.service';
import { DarkModeToggleComponent } from '../ui/component/dark-mode-toggle/dark-mode-toggle.component';
import { HamburgerButtonComponent } from '../ui/component/hamburger-button/hamburger-button.component';
import { SearchBarComponent } from '../ui/component/search-bar/search-bar.component';
import { SideDrawerComponent } from '../ui/component/side-drawer/side-drawer.component';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  standalone: true,
  imports: [
    SideDrawerComponent,
    RouterLinkActive,
    RouterLink,
    FastSvgComponent,
    HamburgerButtonComponent,
    SearchBarComponent,
    FormsModule,
    DarkModeToggleComponent,
    AsyncPipe,
  ],
})
export class AppShellComponent {
  protected authService: AuthService = inject(AuthService);
  private movieService: MovieService = inject(MovieService);
  private router: Router = inject(Router);
  private trackingService: TrackingService = inject(TrackingService);

  genres$ = this.movieService.getGenres();

  public readonly sideDrawerOpen = signal(false);
  public readonly searchValue = signal('');

  constructor() {
    effect(() => {
      if (this.searchValue()) {
        this.router.navigate(['search', this.searchValue()]);
      }
    });
  }

  toggleSideDrawer() {
    this.sideDrawerOpen.update((o: boolean) => !o);
  }

  trackNavigation(route: string) {
    this.trackingService.trackEvent(`nav to: ${route}`);
  }
}
