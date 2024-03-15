import { Component, OnInit } from '@angular/core';
import { EntradaInvService } from '../../services/entrada-inv.service';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-entradas-inv',
  templateUrl: './entradas-inv.component.html',
  styleUrls: ['./entradas-inv.component.css']
})
export class EntradasInvComponent implements OnInit {

  entradasinv: any[] = [];
  entradasinvFiltradas: any[] = [];
  productos: any[] = [];
  terminoBusqueda: string = '';

  constructor(private productoService: ProductoService, private entradainvService: EntradaInvService) {}

  ngOnInit(): void {
    this.obtenerEntradasInv();
    this.obtenerProductos();
  }

  obtenerEntradasInv(): void {
    this.entradainvService.getEntradaInv().subscribe(
      data => {
        this.entradasinv = data;
        this.entradasinvFiltradas = data; // Inicialmente, las entradas filtradas son todas las entradas
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
   
  eliminarEntradaInv(id: number): void {
    this.entradainvService.deleteEntradaInv(id).subscribe(
      () => {
        // Actualizar la lista de entradas después de la eliminación
        this.obtenerEntradasInv();
      },
      error => {
        console.log(error);
      }
    );
  }

  buscarEntradasInv(): void {
    this.entradasinvFiltradas = this.entradasinv.filter(entrada =>
      this.getNombreProducto(entrada.producto).toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}
