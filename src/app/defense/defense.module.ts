import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { DefenseRoutingModule } from './defense-routing.module';
import { DefenseComponent } from './defense.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DefenseRoutingModule,
        SharedModule,
        TranslateModule
    ],
    declarations: [
        DefenseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DefenseModule { }
