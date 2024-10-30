import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'; 
import { TranslationLoaderService } from '@app/shared/services/translation-loader.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonToggleModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedLanguage: any;
  languages: any;

  translationLoader = inject(TranslationLoaderService);

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
    console.log(this.selectedLanguage);
  }

  onLanguageChanged(language: any): void {
    this.selectedLanguage = language;
    this.translationLoader.use(language.id);
    localStorage.setItem('locale', language.id);
  }
}

