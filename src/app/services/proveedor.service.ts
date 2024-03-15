import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl+'proveedores/');
  }

  deleteProveedor(id:number):Observable<any>{
    const url = `${this.baseUrl+'proveedores/'}${id}/`; // URL del proveedor específico a eliminar
    return this.http.delete(url);
  }

  addProveedor(proveedor:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'proveedores/',proveedor)
  }

  updateProveedor(id: number, proveedor: any): Observable<any> {
    const url = `${this.baseUrl}proveedores/${id}/`;
    return this.http.put<any>(url, proveedor);
  }

  getProveedor(id: number): Observable<any> {
    const url = `${this.baseUrl+'proveedores/'}${id}/`;
    return this.http.get<any>(url);
  }


}