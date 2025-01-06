import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
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
  fileName: string;
  formGroup = this._formBuilder.group({
    name: new  FormControl('', [Validators.required]),
  });
  constructor(private categoryService: ItemcategoryService) {}


    onFileSelected(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
         this.fileName = file.name;
      }
  }

  saveData() {
   const category =  new ItemCategoryModel(
    this.formGroup.controls['name'].value!,
    this.fileName
   );

    if (this.formGroup.valid) {
      this.categoryService.CreateCategory(category).pipe(take(1)).subscribe((x:any) =>{
        console.log(x);
        
      });
    }
  }
}
