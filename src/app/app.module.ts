import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EntradasInvComponent } from './components/entradas-inv/entradas-inv.component';
import { SalidasInvComponent } from './components/salidas-inv/salidas-inv.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddSalidaInvComponent } from './components/add-salida-inv/add-salida-inv.component';
import { AddEntradainvComponent } from './components/add-entradainv/add-entradainv.component';
import { UpProveedorComponent } from './components/up-proveedor/up-proveedor.component';
import { UpProductoComponent } from './components/up-producto/up-producto.component';
import { UpEntradainvComponent } from './components/up-entradainv/up-entradainv.component';
import { UpSalidainvComponent } from './components/up-salidainv/up-salidainv.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    ProductosComponent,
    EntradasInvComponent,
    SalidasInvComponent,
    LoginComponent,
    NavigationBarComponent,
    AddProveedorComponent,
    AddProductoComponent,
    AddSalidaInvComponent,
    AddEntradainvComponent,
    UpProveedorComponent,
    UpProductoComponent,
    UpEntradainvComponent,
    UpSalidainvComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
