import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {
  private ingresar:boolean = false;
  public showNavigationBar: boolean = false;

  constructor() { }
  public ingresarAplicativo(obj:any):boolean{
    this.ingresar=obj.usuario == 'UWE' && obj.password == 'BMA20M';
    this.showNavigationBar = this.ingresar;
    return this.ingresar;
  }

  public habilitarlogeo(){
    return this.ingresar;
  }
}