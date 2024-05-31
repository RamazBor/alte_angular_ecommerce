import { Component } from '@angular/core';
import { FeatureItemComponent } from './feature-item/feature-item.component';
import { FEATURES_DATA } from '../../data/features';

@Component({
  selector: 'alte-features',
  standalone: true,
  imports: [FeatureItemComponent],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  features = FEATURES_DATA;
}
