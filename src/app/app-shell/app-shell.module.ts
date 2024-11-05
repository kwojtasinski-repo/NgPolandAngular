import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { DarkModeToggleModule } from '../ui/component/dark-mode-toggle/dark-mode-toggle.module';
import { HamburgerButtonModule } from '../ui/component/hamburger-button/hamburger-button.module';
import { SearchBarModule } from '../ui/component/search-bar/search-bar.module';
import { SideDrawerModule } from '../ui/component/side-drawer/side-drawer.module';
import { AppShellComponent } from './app-shell.component';

@NgModule({
  declarations: [AppShellComponent],
  imports: [
    SideDrawerModule,
    RouterModule,
    FastSvgModule,
    SearchBarModule,
    HamburgerButtonModule,
    FormsModule,
    DarkModeToggleModule,
    CommonModule,
  ],
  exports: [AppShellComponent],
})
export class AppShellModule {}
