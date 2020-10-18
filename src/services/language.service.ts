import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from '~/app/storage/local-storage';

@Injectable({ providedIn: 'root' })
export class LanguageService {

    constructor(private translate: TranslateService) { }

    public setLanguage(userLang: string) {
        const languages = ['en', 'ja'];
        let newLang = 'en';

        if (userLang !== null) {
            if (userLang.length > 2) {
                userLang = userLang.slice(0, 2);
            }

            for (let i = 0; i < languages.length; i++) {
                if (userLang === languages[i]) {
                    newLang = userLang;
                }
            }
        }

        this.translate.setDefaultLang(newLang);
        this.translate.use(newLang);
        LocalStorage.setLanguage(newLang);
    }

    public getLanguage() {
        return this.translate.currentLang;
    }

    public getTranslatedWord(key: string): string {
        return this.translate.instant(key);
    }
}
