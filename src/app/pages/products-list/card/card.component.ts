import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChange,
    SimpleChanges,
    inject,
} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    // private readonly name1 = this.name1.pipe();

    @Input({required: true}) product: IProduct | undefined;

    @Output() readonly buy = new EventEmitter<IProduct['_id']>();

    // readonly name2 = of(1);

    readonly changeDetectorRef = inject(ChangeDetectorRef);

    constructor() {
        // eslint-disable-next-line no-console
        console.log('constructor');
        // this.changeDetectorRef.detach();

        // setTimeout(() => {
        //     this.changeDetectorRef.detectChanges();
        // }, 100);
        // this.name = 'Egor';
    }

    ngOnChanges({product}: SimpleChanges) {
        if (product) {
            // const newValue = product.currentValue;
            // const newValue = this.product;

            this.updateProduct(product);
        }
    }

    ngOnInit() {
        // eslint-disable-next-line no-console
        console.log('Create');
    }

    ngDoCheck() {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        // eslint-disable-next-line no-console
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked');
        // requestAnimationFrame(() => {

        // })
    }

    ngOnDestroy() {
        // eslint-disable-next-line no-console
        console.log('ngOnDestroy');
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.buy.emit(this.product!._id);
    }

    isStarActive(starIndex: number): boolean {
        return !!(this.product && this.product.rating >= starIndex);
    }

    private updateProduct(simpleChange: SimpleChange) {
        // eslint-disable-next-line no-console
        console.log(simpleChange);
    }
}
