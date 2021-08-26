import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainModel } from '../modelo/main-model';

@Injectable({
  providedIn: 'root'
})
export class GetcountrysService {
  // inyectamos http desde el inicio del servcio          
  constructor( private http : HttpClient) { }
 // metodo para traer los datos  
  public get (url:string){
      return this.http.get<MainModel>(url)
  }
}
