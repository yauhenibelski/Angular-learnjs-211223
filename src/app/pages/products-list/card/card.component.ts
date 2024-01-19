import {
    Component,
    EventEmitter,
    HostListener,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {PopupHostComponent} from 'src/app/components/popup-host/popup-host.component';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;
    @Output() readonly buy = new EventEmitter<IProduct['_id']>();

    @ViewChild('mockModal', {read: TemplateRef<undefined>}) modal: TemplateRef<unknown> | null =
        null;

    @Input({required: true}) popup: PopupHostComponent | null = null;
    @HostListener('click', ['$event']) click() {
        this.popup?.addTemplate(this.modal);
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
