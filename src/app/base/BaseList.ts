import { Component, OnInit } from '@angular/core';
import { BaseApiService } from './BaseApiService';
import { response } from 'express';


@Component({
    selector: 'app-base-list',
    template: '', 
  })
export class BaseList<T> implements OnInit {
  data: T[] = [];
  apiUrl: string = '';
  isLoading: boolean = false;
  dataSource : any;

  constructor(public apiService: BaseApiService<T>) {}

  ngOnInit(): void {
    if (this.apiUrl) {
      this.fetchData();
    } else {
      console.error('API URL is not defined');
    }
  }

  fetchData(): void {
    this.isLoading = true;
    this.apiService.get(this.apiUrl).subscribe({
      next: (response) => {
        this.data = response;
        this.dataSource = this.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
        this.isLoading = false;
      },
    });
  }


}
