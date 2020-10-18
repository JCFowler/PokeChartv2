import { Component, OnInit } from '@angular/core';
import { PokemonColor, PokemonType } from '~/enums';

@Component({
    selector: 'Attack',
    templateUrl: './attack.component.html',
    styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

    public selectedType = '';
    public selectedColor = '#ffffff';

    constructor() { }

    ngOnInit(): void {}

    onTypeChanged(type: PokemonType) {
        if (type !== PokemonType.None) {
            this.selectedType = PokemonType[type];
            this.selectedColor = PokemonColor[type];
            console.log(PokemonColor[type])
        } else {
            this.selectedType = '';
            this.selectedColor = '#ffffff';
        }
    }
}
