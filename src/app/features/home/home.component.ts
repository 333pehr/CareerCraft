import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ContentCardComponent } from "../../shared/components/content-card/content-card.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContentCardComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    // Color filter for the LOGO
    svgColorFilter = 'invert(55%) sepia(45%) saturate(586%) hue-rotate(123deg) brightness(90%) contrast(89%)';
}
