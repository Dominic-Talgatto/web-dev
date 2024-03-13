import { Component } from '@angular/core';
import { products } from './products';
import { categories } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kaspi.kz';
  categories;
  show = false;
  categoryName = "";
  products = products;
  isCategoryContainerVisible = true;
  constructor() {
    this.categories = categories;
  }
  categoryClick(name:string){    
      this.show = true;
      this.categoryName = name;
  }
}
