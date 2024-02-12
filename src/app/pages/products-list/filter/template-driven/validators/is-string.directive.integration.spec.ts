import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed, fakeAsync, flush} from '@angular/core/testing';
import {FormsModule, NgModel} from '@angular/forms';
import {ValidatorsModule} from './validators.module';

@Component({
    selector: 'app-test',
    template: `
        <input appIsString [(ngModel)]="search" />
    `,
})
class TestComponent {
    search = '123';

    @ViewChild(NgModel, {static: true})
    readonly ngModel: NgModel | undefined;
}

describe('IsStringDirective', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [FormsModule, ValidatorsModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('ошибка валидации при стартовом значении 123', fakeAsync(() => {
        fixture.detectChanges();

        // tick(100);
        flush();

        const errors = component.ngModel?.errors;

        expect(errors).toEqual({isString: 'Has number value'});
    }));
});
