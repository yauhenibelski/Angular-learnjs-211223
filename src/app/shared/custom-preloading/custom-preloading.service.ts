import {Injectable} from '@angular/core';
import {PreloadingStrategy, Route} from '@angular/router';
import {EMPTY, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CustomPreloadingService implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        // eslint-disable-next-line dot-notation
        if (route.data?.['needPreload']) {
            // eslint-disable-next-line no-console
            console.log('Preloading', route);

            return load();
        }

        // eslint-disable-next-line no-console
        console.log('No preloading', route);

        return EMPTY;
    }
}
