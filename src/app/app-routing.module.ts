import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ProductosComponent } from './components/productos/productos.component';
import { EntradasInvComponent } from './components/entradas-inv/entradas-inv.component';
import { SalidasInvComponent } from './components/salidas-inv/salidas-inv.component';
import { LoginComponent } from './components/login/login.component';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddSalidaInvComponent } from './components/add-salida-inv/add-salida-inv.component';
import { AddEntradainvComponent } from './components/add-entradainv/add-entradainv.component';
import { UpProveedorComponent } from './components/up-proveedor/up-proveedor.component';
import { UpProductoComponent } from './components/up-producto/up-producto.component';
import { UpEntradainvComponent } from './components/up-entradainv/up-entradainv.component';
import { UpSalidainvComponent } from './components/up-salidainv/up-salidainv.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'proveedores',component:ProveedoresComponent},
  {path:'productos',component:ProductosComponent},
  {path:'entradasinv',component:EntradasInvComponent},
  {path:'salidasinv',component:SalidasInvComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}, 
  {path:'login',component:LoginComponent},
  {path:'agregarprov',component:AddProveedorComponent},
  {path:'agregarprod',component:AddProductoComponent},
  {path:'agregarsalidainv',component:AddSalidaInvComponent},
  {path:'agregarentradainv',component:AddEntradainvComponent},
  {path:'actualizarprov/:id',component:UpProveedorComponent},
  {path:'actualizarprod/:id',component:UpProductoComponent},
  {path:'actualizarsal/:id',component:UpSalidainvComponent},
  {path:'actualizarent/:id',component:UpEntradainvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
