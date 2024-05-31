import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FirebaseDocument } from '../core/interfaces/firebase-document';
import { ColorService } from '../services/color.service';
import { Color } from '../core/interfaces/color';

@Injectable({
  providedIn: 'root',
})
export class ColorFacade {
  colorService: ColorService = inject(ColorService);

  getColors(): Observable<{ id: any; name: string }[]> {
    return this.colorService.getColors().pipe(
      map((colors: FirebaseDocument<Color>[]) => {
        return Object.keys(colors).map(
          (key: any) =>
            ({
              ...colors[key],
              id: key,
            } as Color)
        );
      })
    );
  }

  getColorById(id: string): Observable<Color> {
    return this.colorService.getColorById(id).pipe(
      map((color: FirebaseDocument<Color>) => {
        return {
          ...color,
          id,
        } as Color;
      })
    );
  }
}
