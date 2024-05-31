import { Injectable, inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Observable, map } from 'rxjs';
import { Category } from '../core/interfaces/category';
import { FirebaseDocument } from '../core/interfaces/firebase-document';

@Injectable({
  providedIn: 'root',
})
export class CategoryFacade {
  categoryService = inject(CategoryService);

  getCategories(): Observable<{ id: any; name: string }[]> {
    return this.categoryService.getCategories().pipe(
      map((categories: FirebaseDocument<Category>[]) => {
        return Object.keys(categories).map(
          (key: any) =>
            ({
              ...categories[key],
              id: key,
            } as Category)
        );
      })
    );
  }

  getCategoryById(id: string): Observable<Category> {
    return this.categoryService.getCategoryById(id).pipe(
      map(
        (category: FirebaseDocument<Category>) =>
          ({
            ...category,
            id,
          } as Category)
      )
    );
  }
}
