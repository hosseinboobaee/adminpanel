import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCategoryModel } from '../model/item-category.model';

@Injectable({
  providedIn: 'root'
})
export class ItemcategoryService {
  constructor(private http: HttpClient) {}
  CreateCategory(category:ItemCategoryModel){
    return this.http.post<any>(`/ProductBrand/createbrand`,category);
  }

  GetCategories(){
    return this.http.get(`/ProductBrand`);
  }
}
