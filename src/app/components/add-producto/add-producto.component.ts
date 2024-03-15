import { Component } from '@angular/core';
import { ProveedorService } from '../../services/proveedor.service';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent {

  proveedores: any[] = [];
  nuevoProducto = { nombre: '', descripcion: '', cantidad_disponible: 0, precio_unitario: 0, proveedor: '' };

  constructor(private productoService: ProductoService, private proveedorService: ProveedorService, private router: Router) { 
    this.obtenerProveedores();
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      },
      error => {
        console.error('Error al obtener proveedores:', error);
      }
    );
  }

  agregarProducto(): void {
    this.productoService.addProducto(this.nuevoProducto).subscribe(
      () => {
        console.log('Producto agregado con éxito');
        this.nuevoProducto = { nombre: '', descripcion: '', cantidad_disponible: 0, precio_unitario: 0, proveedor: '' };
        // Navegar de regreso a la página de productos
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al agregar producto:', error);
      }
    );
  }
}
