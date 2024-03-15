import { Component } from '@angular/core';
import { SalidaInvService } from '../../services/salida-inv.service';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-salida-inv',
  templateUrl: './add-salida-inv.component.html',
  styleUrls: ['./add-salida-inv.component.css']
})
export class AddSalidaInvComponent {

  productos: any[] = [];
  nuevaSalidaInv = { producto: '', fecha: '', cantidad_vendida: 0};
  terminoBusqueda: string = ''; // Variable para almacenar el término de búsqueda

  constructor(
    private salidainvService: SalidaInvService,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (productos) => {
        this.productos = productos;
      },
      error => {
        console.error('Error al obtener productos:', error);
        // Manejar el error
      }
    );
  }

  agregarSalidaInv(): void {
    this.salidainvService.addSalidaInv(this.nuevaSalidaInv).subscribe(
      () => {
        console.log('Salida agregada con éxito');
        // Reiniciar el objeto para limpiar el formulario
        this.nuevaSalidaInv = { producto: '', fecha: '', cantidad_vendida: 0};
        // Redirigir al usuario a la lista de salidas de inventario después de agregar la salida
        this.router.navigate(['/salidasinv']);
      },
      error => {
        console.error('Error al agregar salida:', error);
        // Manejar el error
      }
    );
  }

  // Método para filtrar productos según el término de búsqueda
  buscarProductos(): void {
    this.productos = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}

