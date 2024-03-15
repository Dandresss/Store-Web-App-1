import { Component, OnInit } from '@angular/core';
import { SalidaInvService } from '../../services/salida-inv.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-salidas-inv',
  templateUrl: './salidas-inv.component.html',
  styleUrls: ['./salidas-inv.component.css']
})
export class SalidasInvComponent implements OnInit {

  salidasinv: any[] = [];
  salidasinvFiltradas: any[] = [];
  productos: any[] = [];
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda

  constructor(
    private productoService: ProductoService,
    private salidainvService: SalidaInvService
  ) {}

  ngOnInit(): void {
    this.obtenerSalidasInv();
    this.obtenerProductos();
  }

  obtenerSalidasInv(): void {
    this.salidainvService.getSalidaInv().subscribe(
      data => {
        this.salidasinv = data;
        this.salidasinvFiltradas=data;
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;

      },
      error => {
        console.log(error);
      }
    );
  }

  getNombreProducto(idProducto: number): string {
    const producto = this.productos.find(prod => prod.id === idProducto);
    return producto ? producto.nombre : 'Producto no encontrado';
  }

  eliminarSalidaInv(id: number): void {
    this.salidainvService.deleteSalidaInv(id).subscribe(
      () => {
        // Actualizar la lista de salidas de inventario después de la eliminación
        this.obtenerSalidasInv();
      },
      error => {
        console.log(error);
      }
    );
  }

  buscarSalidaInv(): void {
    this.salidasinvFiltradas = this.salidasinv.filter(salida =>
      this.getNombreProducto(salida.producto).toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

}
