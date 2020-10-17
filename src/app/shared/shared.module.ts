import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ActionbarComponent } from './actionbar/actionbar.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { TypeKeyboardComponent } from './type-keyboard/type-keyboard.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TranslateModule,
    ],
    exports: [
        NativeScriptCommonModule,
        ActionbarComponent,
        TypeKeyboardComponent,
    ],
    declarations: [
        ActionbarComponent,
        TypeKeyboardComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }
