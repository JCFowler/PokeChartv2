import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable, from } from 'rxjs';

interface System {
  import(request: string): Promise<any>;
}


declare var System: System;

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return from(System.import(`../assets/i18n/${lang}.json`)); // your path
  }
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
            provide: TranslateLoader,
            useClass: WebpackTranslateLoader
            // deps: [HttpClient],
            // useFactory: (createTranslateLoader)
            }
        })
    ],
    declarations: [
        AppComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
