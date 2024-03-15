import { Component } from '@angular/core';
import { EntradaInvService } from '../../services/entrada-inv.service';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entradainv',
  templateUrl: './add-entradainv.component.html',
  styleUrls: ['./add-entradainv.component.css']
})
export class AddEntradainvComponent {

  productos: any[] = [];
  nuevaEntradaInv = { producto: '', fecha: '', cantidad_recibida: 0};

  constructor(
    private entradainvService: EntradaInvService,
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

  agregarEntradaInv(): void {
    this.entradainvService.addEntradaInv(this.nuevaEntradaInv).subscribe(
      () => {
        console.log('Entrada agregada con éxito');
        // Reiniciar el objeto para limpiar el formulario
        this.nuevaEntradaInv = { producto: '', fecha: '', cantidad_recibida: 0};
        // Redirigir al usuario a la lista de entradas de inventario después de agregar la entrada
        this.router.navigate(['/entradasinv']);
      },
      error => {
        console.error('Error al agregar entrada:', error);
        // Manejar el error
      }
    );
  }

}