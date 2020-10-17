import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/(attackTab:attack/default//defenseTab:defense/default//teamTab:team/default)',
        pathMatch: 'full'
    },

    {
        path: 'attack',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/attack/attack.module').then((m) => m.AttackModule),
        outlet: 'attackTab'
    },
    {
        path: 'defense',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/defense/defense.module').then((m) => m.DefenseModule),
        outlet: 'defenseTab'
    },
    {
        path: 'team',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/team/team.module').then((m) => m.TeamModule),
        outlet: 'teamTab'
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
