import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  exports: [NotFoundPageComponent],
  imports: [
    FastSvgModule,
    RouterModule.forChild([{ path: '', component: NotFoundPageComponent }]),
    NotFoundPageComponent,
  ],
})
export class NotFoundPageModule {}
