import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemcategoryService } from '../services/itemcategory.service';
import { ItemCategoryModel } from '../model/item-category.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-itemcategory-entity',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './itemcategory-entity.component.html',
  styleUrl: './itemcategory-entity.component.scss',
})
export class ItemcategoryEntityComponent {
  private _formBuilder = inject(FormBuilder);
  imageSrc: string | ArrayBuffer;
  picture: File;
  formGroup = this._formBuilder.group({
    name: new  FormControl('', [Validators.required]),
  });
  constructor(private categoryService: ItemcategoryService) {}


    onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.picture = file;
    }
  }

  saveData() {
   const category =  new ItemCategoryModel(
    this.formGroup.controls['name'].value!,
    this.picture
   );

    if (this.formGroup.valid) {
      this.categoryService.CreateCategory(category).pipe(take(1)).subscribe((x:any) =>{
        console.log(x);
        
      });
    }
  }
}
