import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { SharedModule } from '../shared/shared.module';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        TeamRoutingModule,
        SharedModule
    ],
    declarations: [
        TeamComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TeamModule { }
