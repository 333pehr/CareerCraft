import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslationLoaderService } from './shared/services/translation-loader.service';
import { locale as english } from './shared/i18n/en';
import { locale as turkish } from './shared/i18n/tr';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

function appInitial(translationLoader: TranslationLoaderService) {
  translationLoader.loadTranslations(english, turkish);
  translationLoader.setDefaultLang(localStorage.getItem('locale') ?? 'en');
  return () => {};
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: appInitial,
      multi: true,
      deps: [TranslationLoaderService],
    },
    TranslateService,
    ...(TranslateModule.forRoot() as any).providers,
  ]
};
