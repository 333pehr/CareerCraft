import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
    lang: string;
    data: Object;
}

@Injectable({
    providedIn: 'root',
})
export class TranslationLoaderService {
    /**
     * Constructor
     *
     * @param {TranslateService} _translateService
     */
    constructor(public _translateService: TranslateService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Load translations
     *
     * @param {Locale} args
     */
    loadTranslations(...args: Locale[]): void {
        const locales = [...args];

        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this._translateService.setTranslation(locale.lang, locale.data, true);
        });
    }

    public translate(key: string, interpolateParams?: any): string {
        return this._translateService.instant(key, interpolateParams);
    }

    public addLangs(langs: Array<string>) {
        this._translateService.addLangs(langs);
    }

    public setDefaultLang(lang: string) {
        return this._translateService.setDefaultLang(lang);
    }

    public use(lang: string) {
        return this._translateService.use(lang);
    }

    public get currentLang() {
        return this._translateService.currentLang;
    }
}