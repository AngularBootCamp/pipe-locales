// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz for Angular polyfill

import { registerLocaleData } from '@angular/common';
// load data for any additional locales you may need
import localeDe from '@angular/common/locales/de'; // Germany
import localeRu from '@angular/common/locales/ru'; // Russia
import localeZh from '@angular/common/locales/zh'; // China
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';

// register locale data
registerLocaleData(localeDe);
registerLocaleData(localeRu);
registerLocaleData(localeZh);

bootstrapApplication(AppComponent).catch(err => console.error(err));
