import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';

// Components
// Directives
// Pipe

// Module

// Services

/**
 * declarations ~ const
 * exports ~ module.exports = {...}
 * imports ~ import {...} from '...'
 */

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
