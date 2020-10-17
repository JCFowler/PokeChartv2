import { Component, OnInit } from '@angular/core';
import { LanguageService } from '~/services';
import { Device } from '@nativescript/core/platform';
import { LocalStorage } from './storage/local-storage';

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private languageService: LanguageService) {}

    ngOnInit(): void {
        const language = LocalStorage.getLanguage();
        if (language) {
            this.languageService.setLanguage(language);
        } else {
            this.languageService.setLanguage(Device.language.split('-')[0]);
        }
    }
}
