import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemcategoryEntityComponent } from '../itemcategory-entity/itemcategory-entity.component';
import { ItemcategoryService } from '../services/itemcategory.service';
import { take } from 'rxjs';
import { ItemCategoryModel } from '../model/item-category.model';
import { BaseList } from '../base/BaseList';
import { BaseApiService } from '../base/BaseApiService';


@Component({
  selector: 'app-item-category',
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss',
})
export class ItemCategoryComponent  extends BaseList<ItemCategoryModel>{

  constructor(apiService: BaseApiService<ItemCategoryModel>) {
    super(apiService); 
    this.apiUrl='http://localhost:5222/api/ProductBrand'
  }
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['code','name'];
 // dataSource: ItemCategoryModel[];

  openDialog() {
    const dialogRef = this.dialog.open(ItemcategoryEntityComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  // loadData(){
  //   this.apiService.get('/ProductBrand').subscribe((x:ItemCategoryModel[]) =>{
  //     this.dataSource = x;
  //   });
  // }
  // CreateCategory(category:ItemCategoryModel){
  //   return this.http.post<any>(`/ProductBrand/createbrand`,category);
  // }
}
