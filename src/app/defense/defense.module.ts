import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { DefenseRoutingModule } from './defense-routing.module';
import { DefenseComponent } from './defense.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DefenseRoutingModule
    ],
    declarations: [
        DefenseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DefenseModule { }
