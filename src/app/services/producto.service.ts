import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl='http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  getProductos():Observable<any>{
    return this.http.get<any[]>(this.baseUrl+'productos/');
  }

  deleteProducto(id:number):Observable<any>{
    const url = `${this.baseUrl+'productos/'}${id}/`; // URL del proveedor específico a eliminar
    return this.http.delete(url);
  }

  addProducto(producto:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'productos/',producto)
  }

  updateProducto(id: number, producto: any): Observable<any> {
    const url = `${this.baseUrl}productos/${id}/`;
    return this.http.put<any>(url, producto);
  }

  getProducto(id: number): Observable<any> {
    const url = `${this.baseUrl+'productos/'}${id}/`;
    return this.http.get<any>(url);
  }
  

}


