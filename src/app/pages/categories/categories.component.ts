import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CategoryFacade } from '../../facades/category.facade';
import { switchMap, tap } from 'rxjs';
import { Category } from '../../core/interfaces/category';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FilterCardComponent } from '../../components/filter-card/filter-card.component';
import { FilterCardCheckboxItemComponent } from '../../components/filter-card-checkbox-item/filter-card-checkbox-item.component';
import { ColorFacade } from '../../facades/color.facade';
import { Color } from '../../core/interfaces/color';
import { ColorItemComponent } from '../../components/color-item/color-item.component';
import { SIZES, Size } from '../../core/types/size.type';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { ProductFacade } from '../../facades/product.facade';
import { SizeItemComponent } from '../../components/size-item/size-item.component';

@Component({
  selector: 'alte-categories',
  standalone: true,
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  imports: [
    BreadcrumbComponent,
    AsyncPipe,
    JsonPipe,
    FilterCardComponent,
    FilterCardCheckboxItemComponent,
    ColorItemComponent,
    ProductItemComponent,
    SizeItemComponent,
  ],
})
export class CategoriesComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  categoryFacade = inject(CategoryFacade);
  colorFacade = inject(ColorFacade);
  productFacade = inject(ProductFacade);

  categories$ = this.categoryFacade.getCategories();
  colors$ = this.colorFacade.getColors();

  sizes = SIZES;

  selectedCategories: Map<string, Category> = new Map();
  selectedColor?: string;
  selectedSize?: Size;

  products$ = this.route.queryParams.pipe(
    tap((params: Params) => {
      this.selectedCategories.clear();
      const category = params['category'];

      if (category) {
        if (Array.isArray(category)) {
          category.forEach((id) => {
            this.selectedCategories.set(id, {} as Category);
          });
        } else {
          this.selectedCategories.set(category, {} as Category);
        }
      }

      this.selectedColor = params['color'];
      this.selectedSize = params['size'];
    }),
    switchMap((params: Params) => {
      return this.productFacade.getProducts({
        categoryId: params['category'],
        colorId: params['color'],
        size: params['size'],
      });
    })
  );

  onCategoryChecked($event: { category: Category; checked: boolean }) {
    if (!$event.checked) {
      this.selectedCategories.delete($event.category.id);
    } else {
      this.selectedCategories.set($event.category.id, $event.category);
    }

    this.router.navigate([], {
      queryParams: {
        category: [...this.selectedCategories.keys()],
      },
    });
  }

  selectColor(color: Color) {
    this.selectedColor = color.id;
    this.router.navigate([], {
      queryParams: {
        color: this.selectedColor,
      },
      queryParamsHandling: 'merge',
    });
  }

  selectSize(size: Size) {
    this.selectedSize = size;
    this.router.navigate([], {
      queryParams: {
        size: this.selectedSize,
      },
      queryParamsHandling: 'merge',
    });
  }
}
