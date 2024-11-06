import { NgModule } from '@angular/core';

import { ElementVisibilityDirective } from './cdk/element-visibility/element-visibility.directive';
import { TiltDirective } from './tilt.directive';

@NgModule({
  imports: [ElementVisibilityDirective, TiltDirective],
  exports: [ElementVisibilityDirective, TiltDirective],
})
export class SharedModule {}
