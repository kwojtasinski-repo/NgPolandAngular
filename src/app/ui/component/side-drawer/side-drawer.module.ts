import { NgModule } from '@angular/core';

import { BackdropModule } from '../backdrop/backdrop.module';
import { SideDrawerComponent } from './side-drawer.component';

@NgModule({
  imports: [BackdropModule, SideDrawerComponent],
  exports: [SideDrawerComponent],
})
export class SideDrawerModule {}
