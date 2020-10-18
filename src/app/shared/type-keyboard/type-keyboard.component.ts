import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonType } from '~/enums';

@Component({
  selector: 'ns-type-keyboard',
  templateUrl: './type-keyboard.component.html',
  styleUrls: ['./type-keyboard.component.scss']
})
export class TypeKeyboardComponent implements OnInit {

    @Input() singleType = false;

    @Output() typeTapped = new EventEmitter();

    public selectedTypes = [
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false
    ];

    private singleSelect = PokemonType.None;
    private selected: PokemonType[] = [PokemonType.None, PokemonType.None];
    private pointer = 0;

    constructor() { }

    ngOnInit(): void {
    }

    onTypeTapped(type: PokemonType) {
        if (this.singleType) {
            if (this.singleSelect === PokemonType.None) {
                this.singleSelect = type;
            } else if (this.singleSelect === type) {
                this.singleSelect = PokemonType.None;
            } else {
                this.selectedTypes[this.singleSelect] = false;
                this.singleSelect = type;
            }
            this.selectedTypes[type] = !this.selectedTypes[type];
            this.typeTapped.emit(this.singleSelect);
        } else {
            if (this.selectedTypes[type]) {
                if (this.selected[0] === type) {
                    this.selected[0] = PokemonType.None;
                    this.pointer = 0;
                } else {
                    this.selected[1] = PokemonType.None;
                    this.pointer = 1;
                }
            } else {
                if (this.selectedTypes[this.selected[this.pointer]]) {
                    this.selectedTypes[this.selected[this.pointer]] = false;
                }

                this.selected[this.pointer] = type;

                this.pointer === 0 ? this.pointer = 1 : this.pointer = 0;
            }

            this.selectedTypes[type] = !this.selectedTypes[type];

            this.typeTapped.emit(this.selected);
        }
    }

}
