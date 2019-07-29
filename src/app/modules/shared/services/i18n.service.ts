import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

    DEFAULT_LANGUAGE = 'es_VE';

    LANGUAGES_AVAILABLES = ['es_VE', 'en_US'];

    currentLanguageSubject = new BehaviorSubject(this.DEFAULT_LANGUAGE);

    constructor(
        private translate: TranslateService,
        private cookieService: CookieService
    ) {}

    init() {
      const languageSelected = this.cookieService.get('languageSelected');

      if (languageSelected !== null && languageSelected.length > 0) {
        this.switchLanguage(languageSelected);
      } else {
        // Start on DEFAULT_LANGUAGE
        this.translate.addLangs(this.LANGUAGES_AVAILABLES);
        this.translate.setDefaultLang(this.DEFAULT_LANGUAGE);
        this.cookieService.set('languageSelected', this.DEFAULT_LANGUAGE, 1, '/');
      }
    }

    switchLanguage(language: string) {
        if (this.LANGUAGES_AVAILABLES.indexOf(language) > -1) {
            this.cookieService.set('languageSelected', language, 1, '/');
            this.currentLanguageSubject.next(language);
            this.translate.use(language);
        }
    }

    currentLanguageInfo$(): BehaviorSubject<string> {
      return this.currentLanguageSubject;
    }

}
