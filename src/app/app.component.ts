import {Component} from '@angular/core';

@Component({
    // selector: 'div#root',
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    // template: `
    //     <h1>Hello</h1>
    // `,
    // styles: ['h1 { color: red; }'],
    // interpolation: ['dd', 'bb'],
})
export class AppComponent {
    title = 'Angular-learnjs-211223';
    window = window;

    logKey(event: Event) {
        // if (event.key !== 'Enter') {
        //     return;
        // }

        // eslint-disable-next-line no-console
        console.log(event);
    }
}
