import { NgModule } from '@angular/core';

import { BackdropModule } from '../backdrop/backdrop.module';
import { SideDrawerComponent } from './side-drawer.component';

@NgModule({
  declarations: [SideDrawerComponent],
  imports: [BackdropModule],
  exports: [SideDrawerComponent],
})
export class SideDrawerModule {}
