import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {productsListMatcher} from './products-list-url-matcher';

const productsListRoutes: Routes = [
    {
        matcher: productsListMatcher,
        component: ProductsListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(productsListRoutes)],
    exports: [RouterModule],
})
export class ProductsListRoutingModule {}
