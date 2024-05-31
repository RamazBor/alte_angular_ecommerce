import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'alte-feature-item',
  standalone: true,
  imports: [],
  templateUrl: './feature-item.component.html',
  styleUrl: './feature-item.component.scss',
})
export class FeatureItemComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
