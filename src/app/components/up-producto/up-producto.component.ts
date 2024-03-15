import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { ProveedorService } from '../../services/proveedor.service';
@Component({
  selector: 'app-up-producto',
  templateUrl: './up-producto.component.html',
  styleUrl: './up-producto.component.css'
})

export class UpProductoComponent implements OnInit {

  proveedorNombre: string='';

  proveedores: any[] = [];
  productoId: number = 0;
  producto: any; // Usando 'any' para el proveedor

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private proveedorService: ProveedorService
  ) { }

  obtenerProveedores(): void {
    this.proveedorService.getProveedores().subscribe(
      (proveedores) => {
        this.proveedores = proveedores;
      },
      error => {
        console.error('Error al obtener proveedores:', error);
        // Lógica adicional en caso de error
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productoId = +params.get('id')!;
      this.proveedorNombre = params.get('proveedor')!;
      this.obtenerDetalleProducto();
      this.obtenerProveedores();
    });
  }

  obtenerDetalleProducto(): void {
    this.productoService.getProducto(this.productoId).subscribe(
      (producto): void => { // Usando 'any' para el proveedor
        this.producto = producto;
      },
      error => {
        console.error('Error al obtener detalle del producto:', error);
        // Manejar el error apropiadamente (p. ej., redirigir a una página de error)
      }
    );
  }

  actualizarProducto(): void {
    this.productoService.updateProducto(this.productoId, this.producto).subscribe(
      () => {
        console.log('Producto actualizado con éxito');
        // Redirigir a la página de detalle del proveedor actualizado
        this.router.navigate(['/productos']);
      },
      error => {
        console.error('Error al actualizar producto:', error);
        // Manejar el error apropiadamente (p. ej., mostrar un mensaje de error al usuario)
      }
    );
    
  }

  cancelar(): void {
    // Redirigir a la página anterior o a cualquier otra página deseada
    this.router.navigate(['/productos']);}

}

