import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppShellModule } from './app-shell/app-shell.module';

@Component({
  selector: 'app-root',
  template: `
    <app-shell>
      <router-outlet />
    </app-shell>
  `,
  standalone: true,
  imports: [AppShellModule, RouterOutlet],
})
export class AppComponent {}
