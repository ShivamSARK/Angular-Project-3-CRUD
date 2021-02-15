import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
  url='https://crud-4c215.firebaseio.com/products.json';
  

  constructor(private http:HttpClient) { }

  saveProducts(products:any[]){
    return this.http.put(this.url,products)
  }
  fetchProducts(){
    return this.http.get(this.url)
  }
 
  }
