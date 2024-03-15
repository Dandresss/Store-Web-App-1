import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProveedorService } from '../../services/proveedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] // Corregido styleUrl a styleUrls
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  proveedores: any[] = [];
  productosFiltrados: any[] = [];
  terminoBusqueda: string = '';

  constructor(private productoService: ProductoService, private router: Router, private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerProveedores();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;
        this.productosFiltrados = data; // Inicialmente, los productos filtrados son todos los productos
      },
      error => {
        console.log(error);
      }
    );
  }

  getNombreProveedor(idProveedor: number): string {
    const proveedor = this.proveedores.find(prov => prov.id === idProveedor);
    return proveedor ? proveedor.nombre : 'Proveedor no encontrado';
  }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      data => {
        this.proveedores = data;
      },
      error => {
        console.log(error);
      }
    );
  }
   
  eliminarProducto(id: number): void {
    this.productoService.deleteProducto(id).subscribe(
      () => {
        // Actualizar la lista de productos después de la eliminación
        this.obtenerProductos();
      },
      error => {
        console.log(error);
      }
    );
  }

  actualizarProducto(id: number): void {
    // Navegar al componente UpProveedorComponent con el ID del proveedor como parámetro
    this.router.navigate(['/actualizarprod', id]);
  }

  buscarProductos(): void {
    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }
}