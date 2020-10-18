import { Component, OnInit } from '@angular/core';
import { PokemonType } from '~/enums';

@Component({
    selector: 'Defense',
    templateUrl: './defense.component.html',
    styleUrls: ['./defense.component.scss']
})
export class DefenseComponent implements OnInit {

    public selectedTypes = ['', ''];

    constructor() {}

    ngOnInit(): void {}

    onTypeChanged(type: PokemonType[]) {
        if (type[0] !== PokemonType.None) {
            this.selectedTypes[0] = PokemonType[type[0]];
        } else {
            this.selectedTypes[0] = '';
        }

        if (type[1] !== PokemonType.None) {
            this.selectedTypes[1] = PokemonType[type[1]];
        } else {
            this.selectedTypes[1] = '';
        }
    }
}
