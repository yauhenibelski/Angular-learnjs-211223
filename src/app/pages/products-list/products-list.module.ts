import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupHostModule} from 'src/app/components/popup-host/popup-host.module';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule, PopupHostModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
