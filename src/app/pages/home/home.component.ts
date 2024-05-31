import { Component } from '@angular/core';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { BestSellerComponent } from '../../components/best-seller/best-seller.component';
import { CategoriesCtaComponent } from '../../components/categories-cta/categories-cta.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'alte-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeroBannerComponent,
    FeaturesComponent,
    BestSellerComponent,
    CategoriesCtaComponent,
    ProductListComponent,
  ],
})
export class HomeComponent {}
