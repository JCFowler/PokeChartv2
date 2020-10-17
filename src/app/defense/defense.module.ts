import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SharedModule } from '../shared/shared.module';

import { DefenseRoutingModule } from './defense-routing.module';
import { DefenseComponent } from './defense.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DefenseRoutingModule,
        SharedModule
    ],
    declarations: [
        DefenseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DefenseModule { }
