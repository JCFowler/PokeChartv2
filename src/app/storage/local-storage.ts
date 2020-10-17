import { ApplicationStorage } from './application-storage';


export class LocalStorage {

    public static setLanguage(language: string) {
        ApplicationStorage.set('language', language);
    }

    public static getLanguage(): string {
        return ApplicationStorage.get<string>('language');
    }
}
