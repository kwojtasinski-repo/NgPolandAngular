import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AppShellModule } from './app/app-shell/app-shell.module';
import { AuthService } from './app/core/auth.service';
import { ReadAccessInterceptor } from './app/core/read-access.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      AppShellModule,
      FastSvgModule.forRoot({
        url: (name: string) => `assets/svg-icons/${name}.svg`,
        defaultSize: '12',
      }),
    ),
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ReadAccessInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
