import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {ProductsListModule} from './pages/products-list/products-list.module';
// import {ProductModule} from './pages/product/product.module';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from './pages/not-found/not-found.module';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        loadChildren: () =>
            import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
    },
    // {
    //     path: 'products-list',
    //     children: [
    //         {
    //             path: '',
    //             component: ProductsListComponent,
    //         },
    //     ],
    // },
    {
        path: 'product/:id',
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    },
    // {
    //     path: 'products-list',
    //     component: ProductsListComponent,
    // },
    // {
    //     path: 'product/:id',
    //     component: ProductComponent,
    //     children: [
    //         {
    //             path: '',
    //             // redirectTo: '/product/id/description',
    //             redirectTo: 'description',
    //             pathMatch: 'full',
    //             // component: DescriptionComponent,
    //         },
    //         {
    //             path: 'description',
    //             component: DescriptionComponent,
    //         },
    //         {
    //             path: 'type',
    //             component: TypeComponent,
    //         },
    //     ],
    // },
    {
        path: '**', // равен любому набору сегментов
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

/**
 * url === http://localhost:4200/product/id
 * urlSegments === product/id
 *
 * search indexes: 0 -> 1 -> 2 -> 3 -> ...
 *
 * curent url segments: ['product', 'id']
 */

/**
 *              _________________ undefined _________________
 *             /                 /         \                 \
 *            /                 /           \                 \
 *           /                 /             \                 \
 *         ['']      ['products-list']  ['product', 'id']    ['**']
 *                                     /      /         \
 *                          __________/      /           \
 *                         /                /             \
 *                       ['']         ['description']   ['type']
 */
