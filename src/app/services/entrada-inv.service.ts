import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntradaInvService {

  private baseUrl = 'http://localhost:8000/api/'

  constructor(private http: HttpClient) { }
  
  getEntradaInv():Observable<any>{
    return this.http.get<any[]>(this.baseUrl+'entradas-inventario/')
  }

  deleteEntradaInv(id:number):Observable<any>{
    const url = `${this.baseUrl+'entradas-inventario/'}${id}/`; // URL del proveedor específico a eliminar
    return this.http.delete(url);
  }

  addEntradaInv(entrada:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+'entradas-inventario/',entrada)
  }

  updateEntradaInv(id: number, entradainv: any): Observable<any> {
    const url = `${this.baseUrl}entradas-inventario/${id}/`;
    return this.http.put<any>(url, entradainv);
  }
}
