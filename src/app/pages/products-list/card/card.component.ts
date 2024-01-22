import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
    @Input({required: true}) product: IProduct | undefined;

    @Output() readonly buy = new EventEmitter<IProduct['_id']>();

    constructor() {
        // eslint-disable-next-line no-console
        console.log('Product card created');

        //     setTimeout(() => {
        //         console.log(this.product);
        //     });
    }

    ngOnChanges(changes: SimpleChanges): void {
        // eslint-disable-next-line no-console
        console.log(changes);
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!(this.product && this.product.rating >= starIndex);
    }
}
