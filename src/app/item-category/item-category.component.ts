import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemcategoryEntityComponent } from '../itemcategory-entity/itemcategory-entity.component';
import { ItemcategoryService } from '../services/itemcategory.service';
import { take } from 'rxjs';
import { ItemCategoryModel } from '../model/item-category.model';


@Component({
  selector: 'app-item-category',
  imports: [MatTableModule, MatButtonModule, MatDialogModule],
  templateUrl: './item-category.component.html',
  styleUrl: './item-category.component.scss',
})
export class ItemCategoryComponent implements OnInit{
  constructor(private categoryService: ItemcategoryService) {}
  ngOnInit() {
   this.loadData();
  }
  readonly dialog = inject(MatDialog);
  displayedColumns: string[] = ['code','name'];
  dataSource: ItemCategoryModel[];

  openDialog() {
    const dialogRef = this.dialog.open(ItemcategoryEntityComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  loadData(){
    this.categoryService.GetCategories().pipe(take(1)).subscribe((x:ItemCategoryModel[]) =>{
      this.dataSource = x;
    });
  }
}
