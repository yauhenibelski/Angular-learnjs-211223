import {InjectionToken} from '@angular/core';

// export const BASE_URL = {};
export const BASE_URL = new InjectionToken<string>('Base url for application', {
    providedIn: 'root',
    factory: () => 'https://course-angular.javascript.ru/api',
});
