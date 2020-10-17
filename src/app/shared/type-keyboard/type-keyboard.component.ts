import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-type-keyboard',
  templateUrl: './type-keyboard.component.html',
  styleUrls: ['./type-keyboard.component.scss']
})
export class TypeKeyboardComponent implements OnInit {

    public selectedTypes = [
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false,
        false, false, false
    ];

    private selected: number[] = [-1, -1];
    private pointer = 0;

    constructor() { }

    ngOnInit(): void {
    }

    typeTapped(num: number, type: string) {
        if (this.selectedTypes[num]) {
            if (this.selected[0] === num) {
                this.selected[0] = -1;
            } else {
                this.selected[1] = -1;
            }
        } else {
            if (this.selected[0] === -1) {
                this.selected[0] = num;
            } else if (this.selected[1] === -1) {
                this.selected[1] = num;
            } else {
                this.selected[this.pointer] = num;

            }
        }

        this.selectedTypes[num] = !this.selectedTypes[num];
    }

}
