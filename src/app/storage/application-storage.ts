import { setString, getString, remove } from '@nativescript/core/application-settings';

export class ApplicationStorage {

    public static set(key: string, value: any) {
        const valueJSON = JSON.stringify(value);
        setString(key, valueJSON);
    }

    public static get<T>(key: string): T {
        const valueJSON = getString(key);
        if (valueJSON === undefined) {
            return undefined;
        }

        return JSON.parse(valueJSON) as T;
    }

    public static remove(key: string) {
        remove(key);
    }
}
