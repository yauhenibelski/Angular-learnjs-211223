import {NgModule} from '@angular/core';
import {DumpNgIfDirective} from './dump-ng-if.directive';

@NgModule({
    declarations: [DumpNgIfDirective],
    exports: [DumpNgIfDirective],
})
export class DumpNgIfModule {}
