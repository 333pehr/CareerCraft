import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'; 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, MatButtonToggleModule, MatIconModule, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedLanguage: string = 'ENG';
  constructor() {}

  onLanguageChanged(language: string) {
    this.selectedLanguage = language;
  }
}
