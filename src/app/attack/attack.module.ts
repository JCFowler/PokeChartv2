import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SharedModule } from '../shared/shared.module';

import { AttackRoutingModule } from './attack-routing.module';
import { AttackComponent } from './attack.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AttackRoutingModule,
        SharedModule
    ],
    declarations: [
        AttackComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AttackModule { }
