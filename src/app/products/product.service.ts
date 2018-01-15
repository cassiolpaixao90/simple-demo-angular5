
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ProductService{
  
  private _productUrl = "./api/products/products.json";
  constructor(private _http: HttpClient){}
  
  getProducts(): Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this._productUrl)
      .do(data => console.log('All:'+JSON.stringify(data)))
      .catch(this.handlerError); 
  }
  
  private handlerError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
  
}