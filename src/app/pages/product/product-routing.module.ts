import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductComponent} from './product.component';
import {DescriptionComponent} from './description/description.component';
import {TypeComponent} from './type/type.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        // canActivateChild: [canActivateChildGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {}
