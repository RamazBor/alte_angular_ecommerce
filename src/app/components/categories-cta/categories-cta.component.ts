import { Component } from '@angular/core';
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
    selector: 'alte-categories-cta',
    standalone: true,
    templateUrl: './categories-cta.component.html',
    styleUrl: './categories-cta.component.scss',
    imports: [ButtonComponent]
})
export class CategoriesCtaComponent {

}
