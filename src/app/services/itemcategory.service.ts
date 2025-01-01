import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCategoryModel } from '../model/item-category.model';

@Injectable({
  providedIn: 'root'
})
export class ItemcategoryService {
  public apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  CreateCategory(category:ItemCategoryModel){
    return this.http.post<any>(`${this.apiUrl}/ProduCtategory/CreateProduct`,category);
  }

  GetCategories(){
    return this.http.get(`${this.apiUrl}/ProduCtategory/GetAllCategory`);
  }
}
