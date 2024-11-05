import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  /**
   * Position of the image in the card.
   */
  @Input() imagePosition: 'left' | 'right' = 'right';

  /**
   * Title of the card.
   */
  @Input() title!: string;

  /**
   * description of the card.
   */
  @Input() description!: string;

  /**
   * Image url of the card.
   */
  @Input() imageUrl?: string;
}
