import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {DumpNgIfModule} from '../../shared/dump-ng-if/dump-ng-if.module';
import {ScrollWithLoadingModule} from '../../shared/scroll-with-loading/scroll-with-loading.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {FilterByPropertyModule} from '../../shared/filter-by-property/filter-by-property.module';
import {ProductsListRoutingModule} from './products-list-routing.module';
import {CounterInputModule} from '../../shared/counter-input/counter-input.module';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        ProductsListRoutingModule,
        CommonModule,
        CardModule,
        DumpNgIfModule,
        MatProgressSpinnerModule,
        ScrollWithLoadingModule,
        MatButtonModule,
        MatIconModule,
        PaginationModule,
        FilterByPropertyModule,
        RouterModule,
        CounterInputModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
