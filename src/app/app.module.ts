import { registerLocaleData } from '@angular/common';
// load data for any additional locales you may need
import localeFr from '@angular/common/locales/fr'; // France
import localeRu from '@angular/common/locales/ru'; // Russia
import {
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// register locale data
registerLocaleData(localeFr);
registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
  providers: [
    // Localized pipes use these injected values, unless overridden
    { provide: LOCALE_ID, useValue: 'fr-FR' }, // default is en-US
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' } // default is USD
  ]
})
export class AppModule {}
