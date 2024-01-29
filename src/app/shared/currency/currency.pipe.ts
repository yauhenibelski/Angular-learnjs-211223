import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currency',
    pure: false,
})
export class CurrencyPipe implements PipeTransform {
    transform(price: number | undefined): string {
        // eslint-disable-next-line no-console
        console.log('Calculated pipe currency');

        return `${price} $`;
    }
}
