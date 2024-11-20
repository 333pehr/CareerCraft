import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardContent } from '@app/core/models/app-models/card-content.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent {
  @Input() content!: CardContent;
}
