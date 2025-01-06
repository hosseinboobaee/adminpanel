import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCategoryModel } from '../model/item-category.model';

@Injectable({
  providedIn: 'root'
})
export class ItemcategoryService {
  public apiUrl: string = 'http://localhost:5222/api';
  constructor(private http: HttpClient) {}
  CreateCategory(category:ItemCategoryModel){
    return this.http.post<any>(`${this.apiUrl}/ProductBrand/createbrand`,category);
  }

  GetCategories(){
    return this.http.get(`${this.apiUrl}/ProductBrand`);
  }
}
