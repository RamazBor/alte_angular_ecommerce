import { Injectable } from '@angular/core';
import { ApiService } from '../core/services';
import { Category } from '../core/interfaces/category';
import { FirebaseDocument } from '../core/interfaces/firebase-document';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends ApiService {
  getCategories() {
    return this.get<FirebaseDocument<Category>[]>('categories.json');
  }

  getCategoryById(id: string) {
    return this.get<FirebaseDocument<Category>>(`categories/${id}.json`);
  }
}
