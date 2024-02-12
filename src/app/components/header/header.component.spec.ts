import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {By} from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import {HeaderModule} from './header.module';

describe('HeaderComponent', () => {
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderModule, RouterTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('клик по меню', () => {
        const menuClickOutputEmitSpy = spyOn(component.menuClick, 'emit');
        const {debugElement} = fixture;
        const menuButtonDebugElement = debugElement.query(By.css('[test-id="header-button-menu"]'));

        expect(menuButtonDebugElement).toBeTruthy();
        expect(menuClickOutputEmitSpy).not.toHaveBeenCalled();

        const trigerEvent = new Event('click');

        menuButtonDebugElement.triggerEventHandler('click', trigerEvent);

        expect(menuClickOutputEmitSpy).toHaveBeenCalled();
    });
});
