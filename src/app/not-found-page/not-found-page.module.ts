import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FastSvgModule } from '@push-based/ngx-fast-svg';

import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  exports: [NotFoundPageComponent],
  imports: [
    FastSvgModule,
    RouterModule.forChild([{ path: '', component: NotFoundPageComponent }]),
  ],
})
export class NotFoundPageModule {}
