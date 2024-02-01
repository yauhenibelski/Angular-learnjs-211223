import {Inject, Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from './base-url.token';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const newRequest = request.clone({
            url: this.baseUrl + request.url,
        });

        // console.log('intercept');

        // return next.handle(newRequest).pipe(
        //     // map(httpResponse => {
        //     //     if (httpResponse instanceof HttpRequest) {
        //     //         return ...;
        //     //     }
        //     // })
        //     tap({
        //         error: () => {
        //             // side effects on ERROR
        //         },
        //         next: () => {
        //             // side effect on Responce
        //         },
        //     }),
        // );

        return next.handle(newRequest);
    }
}
