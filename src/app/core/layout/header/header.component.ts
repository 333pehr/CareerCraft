import { Component, Host, HostBinding, inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'; 
import { TranslationLoaderService } from '@app/shared/services/translation-loader.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@app/shared/services/theme.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonToggleModule, MatIconModule, MatMenuModule, MatButtonModule, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  selectedLanguage: any;
  languages: any;

  // Color filter for the LOGO
  svgColorFilter = 'invert(55%) sepia(45%) saturate(586%) hue-rotate(123deg) brightness(90%) contrast(89%)';

  translationLoader = inject(TranslationLoaderService);

  themeSerivce = inject(ThemeService);

  constructor() {
    this.languages = [
      {
          id: 'en',
          title: 'English',
          flag: 'us',
      },
      {
          id: 'tr',
          title: 'Turkish',
          flag: 'tr',
      },
    ];

    const selectedLanguageKey = localStorage.getItem('locale') ?? 'en';

    this.selectedLanguage = this.languages.find((e: any) => e.id === selectedLanguageKey);
  }

  /**
   * Set the language of the application and change the translation data
   * @param language language object to set
   */
  onLanguageChanged(language: any): void {
    this.selectedLanguage = language;
    this.translationLoader.use(language.id);
    localStorage.setItem('locale', language.id);
  }

  /**
   * Set the theme of the application and change the theme data
   * @param e on theme changed event
   */
  onThemeChanged(e: any): void {
    const theme = e.value;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      this.themeSerivce.enableDarkMode();
    } else {
      this.themeSerivce.disableDarkMode();
    }
  }
}

