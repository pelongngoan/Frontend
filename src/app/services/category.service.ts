import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements OnInit {
url = environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(data:any){
    return this.httpClient.post(this.url+
      "/category/add",data,{
        headers:new HttpHeaders().set('Content-Type','application/json')
      });
  }
  update(data:any){
    return this.httpClient.post(this.url+
      "/category/update",data,{
        headers:new HttpHeaders().set('Content-Type','application/json')
      });
  }
  getCategorys(){
    return this.httpClient.get(this.url+"/category/get");
  }
  getFilteredCategorys(){
    return this.httpClient.get(this.url+"/category/get?filterValue=true");
  }
}
