import { NgModule } from '@angular/core';
import { FastSvgModule } from '@push-based/ngx-fast-svg';
import { RxLet } from '@rx-angular/template/let';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [FastSvgModule, RxLet, SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
