import { BaseApiService } from "./BaseApiService";

export class BaseForm{
    apiUrl: string = '';
    isLoading: boolean = false;

    constructor(public apiService: BaseApiService<>){

    }
    postData(data : any){
        this.isLoading = true;
        this.apiService.post(this.apiUrl , data).subscribe({
          next : (response) =>{
            console.log(response);
            this.isLoading = false;
            
          },
          error:(err) =>{
            console.log(err);
            this.isLoading = false;
            
          }
        });
      }
}