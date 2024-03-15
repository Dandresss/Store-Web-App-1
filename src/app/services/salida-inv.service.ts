import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalidaInvService {

  private baseUrl = 'http://localhost:8000/api/'

  constructor(private http:HttpClient) { }

  getSalidaInv(): Observable<any>{
    return this.http.get<any[]>(this.baseUrl+'salidas-inventario/')
  }

  deleteSalidaInv(id:number):Observable<any>{
    const url = `${this.baseUrl+'salidas-inventario/'}${id}/`; // URL del proveedor específico a eliminar
    return this.http.delete(url);
  }

  addSalidaInv(salida:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'salidas-inventario/',salida)
  }

  updateSalidaInv(id: number, salidainv: any): Observable<any> {
    const url = `${this.baseUrl}salidas-inventario/${id}/`;
    return this.http.put<any>(url, salidainv);
  }

}

